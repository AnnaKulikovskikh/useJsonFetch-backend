const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
server.use(cors());
server.use(bodyParser());

server.get("/data", async (req, res) => {
  console.log("call");
  res.send({ status: "ok" });
  res.end();
});
server.get("/error", async (req, res) => {
  res.status = 500;
  res.send({ status: "Internal Error" });
  res.end();
});
server.get("/loading", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  res.send({ status: "ok" });
  res.end();
});

const port = process.env.PORT || 7070;
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
