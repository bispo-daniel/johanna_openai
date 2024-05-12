const getEnvVar = (name: string) => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }

  return value;
};

export const PORT = getEnvVar('PORT');
export const IS_DEV_MODE = getEnvVar('IS_DEV_MODE');
export const OPENAI_API_KEY = getEnvVar('OPENAI_API_KEY');
export const OPENAI_MODEL = getEnvVar('OPENAI_MODEL');
export const OPENAI_DEFAULT_SYSTEM_MESSAGE = getEnvVar('OPENAI_DEFAULT_SYSTEM_MESSAGE').replace(/_/g, " ");