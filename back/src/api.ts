import { Article } from "../../front/src/app/interfaces/article";
import express from "express";
import { rest } from "./rest";

export function api() {
  const app = express.Router();

  app.use("/articles", rest<Article>("articles"));
  return app;
}
