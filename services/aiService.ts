
export interface ScanResult {
  file: string;
  algo: string;
  status: 'CRITICAL' | 'VULNERABLE' | 'QUANTUM-WEAK' | 'SAFE';
  recommendation: string;
}

export const aiService = {
  async scanCode(code: string): Promise<ScanResult[]> {
    try {
      const response = await fetch('/api/scan-security', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
      
      if (!response.ok) throw new Error("API request failed");
      
      const data = await response.json();
      return data.report;
    } catch (error) {
      console.error("Scan error:", error);
      throw error;
    }
  },

  async submitInquiry(payload: any) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return response.json();
  }
};
