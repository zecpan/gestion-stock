console.log("About to start the server...");
import cors from "cors";
import express from "express";
import morgan from "morgan";
import serveIndex from "serve-index";
import { api } from "./api";

const app = express();
const port = 3000;
const dir = ".";

//cors
app.use(cors());

//access log
app.use(morgan("tiny"));

//busines
app.use("/api", api());

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
