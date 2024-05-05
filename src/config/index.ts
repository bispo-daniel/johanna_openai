const getEnvVar = (name: string) => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }

  return value;
};

export const PORT = getEnvVar('PORT');
export const IS_DEV_MODE = getEnvVar('IS_DEV_MODE');