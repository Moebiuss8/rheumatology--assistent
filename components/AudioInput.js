import React, { useState } from 'react';

function AudioInput({ onFileUpload }) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileUpload(file);
    }
  };

  return (
    <div>
      <h3>Carica un file audio</h3>
      <input type="file" accept=".mp3,.wav" onChange={handleFileChange} />
      {fileName && <p>File caricato: {fileName}</p>}
    </div>
  );
}

export default AudioInput;
