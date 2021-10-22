import express from "express";
import { Resource } from "./interfaces/Resource";
import { ResourceService } from "./resource.service";

export function rest<T extends Resource>(resourceName: string) {
  function generateId() {
    return Date.now() + "_" + Math.floor(Math.random() * 1e6);
  }
  const app = express.Router();
  const resourceService = new ResourceService();

  app.use(express.json());

  app.get("/", (req, res) => {
    const resourceList = resourceService.retrieveAll();
    res.json(resourceList);
  });

  app.post("/", (req, res) => {
    const resource = req.body as T;
    console.log("resource: ", resource);
    const result = resourceService.add(resource);
    res.status(201).json(result);
  });

  app.delete("/", (req, res) => {
    const ids = req.body as string[];
    console.log("ids: ", ids);
    resourceService.removeBulk(ids);
    res.status(204).end();
  });

  return app;
}
