import React, { useState } from 'react';
import { runAnalysis } from '../api/huggingFace';

function Analysis() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRunAnalysis = async () => {
    setLoading(true);
    try {
      const model = "openlm-research/open_llama_3b"; // Modello desiderato
      const prompt = "Analizza il seguente testo medico: ...";
      const data = await runAnalysis(model, prompt);
      setResult(data);
    } catch (error) {
      console.error("Errore durante l'analisi:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Analisi</h3>
      <button onClick={handleRunAnalysis} disabled={loading}>
        {loading ? "Analizzando..." : "Esegui analisi"}
      </button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default Analysis;
