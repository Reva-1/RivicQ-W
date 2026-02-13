
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Initialize Gemini API using named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

/**
 * Helper: Parse JSON from LLM response
 */
function parseLLMResponse(text) {
  if (!text) return [];
  try {
    // Attempt to find JSON in markdown blocks or just clean up the raw string
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/```([\s\S]*?)```/);
    const cleanText = jsonMatch ? jsonMatch[1].trim() : text.trim();
    return JSON.parse(cleanText);
  } catch (e) {
    console.error("Failed to parse LLM response:", text);
    return [];
  }
}

/**
 * API: Security Scan
 */
app.post('/api/scan-security', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: "No code provided." });

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Perform a detailed technical security audit on the provided code snippet. 
      Focus on cryptographic vulnerabilities and quantum readiness.
      
      Auditing Requirements:
      1. Identify legacy/weak algorithms (e.g., RSA < 3072, ECC with small curves, SHA-1, MD5).
      2. Detect quantum vulnerabilities like "Harvest Now, Decrypt Later" exposure.
      3. Recommend specific Post-Quantum Cryptography (PQC) migration paths using NIST standards (ML-KEM, ML-DSA).
      
      OUTPUT FORMAT:
      Return ONLY a JSON array of objects. Do not include preamble or explanation outside the JSON.
      Each object must follow this structure:
      {
        "file": "source_component",
        "algo": "the algorithm name found",
        "status": "CRITICAL" | "VULNERABLE" | "QUANTUM-WEAK" | "SAFE",
        "recommendation": "Technical fix or migration steps"
      }
      
      Code to Audit:
      ${code}`,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are a world-class cryptographic security auditor specializing in NIST PQC standards. Your output must be valid JSON."
      }
    });

    const report = parseLLMResponse(response.text);
    res.json({ success: true, report });
  } catch (error) {
    console.error("AI Scan Error:", error);
    res.status(500).json({ error: "Audit service failed." });
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, type } = req.body;
  console.log(`[Lead] Type: ${type}, From: ${name} <${email}>`);
  res.json({ success: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`RivicQ Server Live: http://localhost:${port}`);
});
