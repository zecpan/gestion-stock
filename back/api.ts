import express from "express";
import { rest } from "./rest";

export function api() {
  const app = express.Router();

  app.use("/articles", rest("articles"));
  return app;
}
