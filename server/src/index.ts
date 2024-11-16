import express, { Express, Response } from "express";
import dotenv from "dotenv";

// load root project's .env file
dotenv.config({path: '../.env'});

const app: Express = express();
const port = process.env.SERVER_HTTP_PORT || 8080;

app.use('/assets', express.static(process.env.CLIENT_BASE_URL ?? './assets'));

app.get("/", (_req, res: Response) => {
  res.send("Hello from Express + TypeScript Server!");
});

app.get("/api/hello", (_req, res: Response) => {
  res.send("Hello from Express + TypeScript Server!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(`[server]: Client app is accessible at http://localhost:${port}${process.env.CLIENT_PATH}`);
});