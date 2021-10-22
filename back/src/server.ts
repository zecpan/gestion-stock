import cors from "cors";
import express from "express";
import morgan from "morgan";
import { resolve } from "path";
import serveIndex from "serve-index";
import { api } from "./api";

const app = express();
const port = 3000;
const dir = resolve("../front/dist/front");

//cors
app.use(cors());

//access log
app.use(morgan("tiny"));

//busines
app.use("/api", api());

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

//path rewrite
app.get("/*", (req, res) => {
  res.sendFile(resolve(dir, "index.html"));
});

app.listen(port, () => {});
