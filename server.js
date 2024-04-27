const path = require('path');
require("dotenv").config({
  path: path.join(__dirname, '.env')
});
const PORT = process.env.PORT || 8001;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/", router);


app.listen(PORT, () =>
  console.log(`server running on PORT http://localhost:${PORT}`)
);

