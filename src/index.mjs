import express from "express";
import { PORT } from "./config/env.js";
import router from "./routes/index.js";
import logger from "./middleware/logger.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.use(logger);

// register routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at:${PORT}`);
});
