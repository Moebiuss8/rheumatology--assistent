import axios from 'axios';

const huggingFaceApi = axios.create({
  baseURL: 'https://api-inference.huggingface.co/models',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_HUGGINGFACE_TOKEN}`,
  },
});

export const runAnalysis = async (model, prompt) => {
  try {
    const response = await huggingFaceApi.post(`/${model}`, { inputs: prompt });
    return response.data;
  } catch (error) {
    console.error('Errore nell’analisi:', error);
    throw error;
  }
};
