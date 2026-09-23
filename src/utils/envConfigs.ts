import "dotenv/config";

interface Env {
  PORT: string | undefined;
}

export const envConfigs: Env = {
  PORT: process.env.PORT,
};
