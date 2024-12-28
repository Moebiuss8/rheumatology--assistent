import React, { useRef } from 'react';

function MedicalRecord() {
  const recordRef = useRef(null);

  const copyToClipboard = () => {
    const text = recordRef.current.innerText;
    navigator.clipboard.writeText(text);
    alert("Copiato negli appunti!");
  };

  return (
    <div>
      <h3>Medical Record</h3>
      <div
        contentEditable
        ref={recordRef}
        style={{ border: '1px solid #ccc', padding: '10px' }}
      >
        ANAMNESI PATOLOGICA REMOTA: ...
      </div>
      <button onClick={copyToClipboard}>Copia</button>
    </div>
  );
}

export default MedicalRecord;
