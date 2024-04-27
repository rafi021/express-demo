import { configDotenv } from "dotenv";
configDotenv({
  path: "../.env",
});

export const PORT = process.env.PORT || 3000;
