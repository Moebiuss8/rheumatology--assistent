# rheumatology--assistent
# Rheumatology Assistant

Questo progetto è un'applicazione cloud-based per assistere i reumatologi durante le visite mediche, sviluppata con React e integrata con Hugging Face API.

## Funzionalità principali
- **Upload di file audio**: Carica o registra audio da analizzare.
- **Analisi con Hugging Face**: Usa modelli di intelligenza artificiale per analizzare trascrizioni.
- **Nomogrammi di probabilità**: Stima delle probabilità pre/post test basate su criteri diagnostici.
- **Medical Record strutturato**: Genera un resoconto medico modificabile e copiabile.

## Struttura dell'app
- **Input audio**: Caricamento di file audio (formati .mp3 e .wav).
- **Analisi**: Generazione di diagnosi probabili e raccomandazioni terapeutiche.
- **Probability**: Nomogrammi logaritmici per calcolare probabilità pre/post test.
- **Medical Record**: Trascrizione strutturata di anamnesi, esami e terapie.

## Requisiti
- Node.js e npm installati sul computer.
- Token Hugging Face per l'accesso ai modelli.

## Come iniziare
1. Clona il repository:
   ```bash
   git clone https://github.com/username/rheumatology-assistant.git
   cd rheumatology-assistant
