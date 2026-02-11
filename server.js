
const express = require('express');
const path = require('path');
const cors = require('cors');
const { GoogleGenAI } = require("@google/genai");

const app = express();
const port = process.env.PORT || 3000;

// Initialize Gemini API
// The API_KEY is provided by the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

app.use(cors());
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

/**
 * Helper: Parse JSON from LLM response
 * Handles cases where the LLM wraps JSON in markdown blocks.
 */
function parseLLMResponse(text) {
  try {
    // Look for JSON within markdown code blocks if present
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/```([\s\S]*?)```/);
    const cleanText = jsonMatch ? jsonMatch[1].trim() : text.trim();
    return JSON.parse(cleanText);
  } catch (e) {
    console.error("Failed to parse LLM response:", text);
    throw new Error("Invalid response format from AI Auditor.");
  }
}

/**
 * API: Security Scan
 * Uses Gemini 3 Pro to analyze code for cryptographic vulnerabilities.
 */
app.post('/api/scan-security', async (req, res) => {
  try {
    const { code } = req.body;
    
    if (!code) {
      return res.status(400).json({ error: "No code provided for scanning." });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Perform a technical security audit on the following code snippet. 
      Specifically identify:
      1. Legacy cryptographic algorithms (RSA < 3072, ECC, SHA-1, MD5).
      2. Quantum vulnerabilities (Harvest Now, Decrypt Later risks).
      3. Recommendations for Post-Quantum Cryptography (PQC) migration (e.g., ML-KEM, ML-DSA).
      
      CRITICAL: You MUST return strictly a JSON array of objects. Do not add any conversational text.
      Format:
      [
        {"file": "filename/block", "algo": "algorithm", "status": "CRITICAL/VULNERABLE/QUANTUM-WEAK/SAFE", "recommendation": "detailed fix"}
      ]
      
      Code to analyze:
      ${code}`,
      config: {
        responseMimeType: "application/json"
      }
    });

    const report = parseLLMResponse(response.text);
    res.json({ success: true, report });
  } catch (error) {
    console.error("AI Scan Error:", error);
    res.status(500).json({ error: error.message || "Failed to perform AI security scan." });
  }
});

/**
 * API: Contact/Investor Form Handler
 */
app.post('/api/contact', (req, res) => {
  const { name, email, company, message, type } = req.body;
  console.log(`[New Inquiry] Type: ${type}, From: ${name} (${company}), Email: ${email}`);
  res.json({ success: true, message: "Inquiry received and queued for review." });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`RivicQ Backend running at http://localhost:${port}`);
});
