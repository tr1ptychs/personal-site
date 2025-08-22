import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
}

const config: Config = {
  port: (process.env.PORT || 3000) as number,
  nodeEnv: (process.env.NODE_ENV || "development") as string,
};

export default config;
