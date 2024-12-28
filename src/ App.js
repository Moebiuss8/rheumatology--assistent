import React, { useState } from 'react';
import AudioInput from './components/AudioInput';
import Analysis from './components/Analysis';
import MedicalRecord from './components/MedicalRecord';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    console.log("File ricevuto:", file);
  };

  return (
    <div>
      <h1>Assistente Reumatologico</h1>
      <AudioInput onFileUpload={handleFileUpload} />
      <Analysis />
      <MedicalRecord />
    </div>
  );
}

export default App;
