import debug from "debug";
const startupDebugger = debug('app:startup');
const dbDebugger = debug('app:db');
import express from "express";
import { PORT } from "./config/env.js";
import router from "./routes/index.js";
import logger from "./middleware/logger.js";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
//import config from "config";



const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get("env")}`);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(cors());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger('Morgan enabled ....')
}


// DB Work
dbDebugger('Connected to db debug')

// Configuration
//console.log("Application Name: " + config.get("name"));
//console.log("Mail Server Name: " + config.get("mail.host"));

app.use(logger);

// register routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at:${PORT}`);
});
