import express from "express";
import { PORT } from "./config/env.js";
import router from "./routes/index.js";

const app = express();

// register routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at:${PORT}`);
});
