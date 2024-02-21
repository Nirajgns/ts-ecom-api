import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import { authRoutes } from "./routes/auth";
import rootRouter from "./routes";

const app: Express = express();

app.use("/api", rootRouter);

app.listen(PORT, () => console.log("listening on port 3000"));
