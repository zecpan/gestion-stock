import express from "express";

const resourceList = [
  { name: "Tournevis", price: 1.23, qty: 234 },
  { name: "Pelle", price: 2.4, qty: 120 },
  { name: "Pince", price: 3, qty: 5 },
  { name: "Marteau", price: 5, qty: 1200 },
];
export function rest(resourceName: string) {
  const app = express.Router();

  app.get("/", (req, res) => {
    res.json(resourceList);
  });
  return app;
}
