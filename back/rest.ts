import express from "express";
import { Resource } from "./interfaces/Resource";

export function rest<T extends Resource>(resourceName: string) {
  function generateId() {
    return Date.now() + "_" + Math.floor(Math.random() * 1e6);
  }
  const resourceList: T[] = [
    { id: "a1", name: "Tournevis", price: 1.23, qty: 234 },
    { id: "a2", name: "Pelle", price: 2.4, qty: 120 },
    { id: "a3", name: "Pince", price: 3, qty: 5 },
    { id: "a4", name: "Marteau", price: 5, qty: 1200 },
  ] as unknown[] as T[];
  const app = express.Router();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json(resourceList);
  });

  app.post("/", (req, res) => {
    const resource = req.body as T;
    console.log("resource: ", resource);
    resource.id = generateId();
    resourceList.push(resource);
    res.status(201).json(resource);
  });
  return app;
}
