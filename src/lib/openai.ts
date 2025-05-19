
// Store the API key (in a real app, this should be stored securely in a backend)
// This is just a temporary setup for demo purposes
export const OPENAI_API_KEY = '';

export const getOpenAIKey = (): string => {
  // In a production app, we would fetch this from a secure backend
  return OPENAI_API_KEY || localStorage.getItem('openai_api_key') || '';
};

export const setOpenAIKey = (key: string): void => {
  localStorage.setItem('openai_api_key', key);
};

export async function generateChallenge(topic: string): Promise<any> {
  const apiKey = getOpenAIKey();
  
  if (!apiKey) {
    throw new Error('OpenAI API key is required');
  }
  
  // This would be the implementation to call OpenAI API
  // For now, we'll return a mock response
  console.log('Would generate challenge about:', topic);
  
  // Mock response
  return {
    title: "Quantum Entanglement Puzzle",
    question: "If two entangled particles are separated by 1 light-year, and the spin of one particle is measured, how long would it take for the other particle to 'know' its spin state?",
    hint: "Think about the fundamental properties of quantum entanglement and information transfer.",
    answer: "0",
    explanation: "In quantum entanglement, the correlation between the particles is instantaneous, regardless of the distance separating them. This does not violate relativity because no actual information is being transmitted faster than light."
  };
}
