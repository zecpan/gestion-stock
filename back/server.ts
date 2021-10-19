console.log("About to start the server...");
import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;
const dir = ".";

app.use((req, res, next) => {
  console.log("req.url", req.method, req.url);
  next();
});

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
