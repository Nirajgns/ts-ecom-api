import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

app.listen(3000, () => console.log("listening on port 3000"));
