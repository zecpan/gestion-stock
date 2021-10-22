import express from "express";
import { Resource } from "./interfaces/Resource";
import { ResourceServiceFactory } from "./services/ResourceServiceFactory";

export function rest<T extends Resource>(resourceName: string) {
  const app = express.Router();
  const resourceService = ResourceServiceFactory.get(
    process.env.GESTION_STOCK_DBTYPE || "ram",
    resourceName
  );

  app.use(express.json());

  app.get("/", (req, res) => {
    (async () => {
      try {
        const resourceList = await resourceService.retrieveAll();
        res.json(resourceList);
      } catch (err) {
        res.status(500).end();
      }
    })();
  });

  app.post("/", (req, res) => {
    (async () => {
      try {
        const resource = req.body as T;
        console.log("resource: ", resource);
        const result = await resourceService.add(resource);
        res.status(201).json(result);
      } catch (err) {
        res.status(500).end();
      }
    })();
  });

  app.delete("/", (req, res) => {
    (async () => {
      try {
        const ids = req.body as string[];
        await resourceService.removeBulk(ids);
        res.status(204).end();
      } catch (err) {
        console.log("err: ", err);
      }
    })();
  });

  return app;
}
