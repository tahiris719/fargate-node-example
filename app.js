const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var jsonParser = bodyParser.json()

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World"));

app.post("/", jsonParser, (req, res) => {
  res.send("Hello " + req.body?.name);
});

app.listen(PORT, () => console.log(`Server listening in port ${PORT}`));
