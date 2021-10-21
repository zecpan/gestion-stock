console.log("About to start the server...");
import express from "express";
import serveIndex from "serve-index";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3000;
const dir = ".";

//cors
app.use(cors());

//access log
app.use(morgan("tiny"));

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
