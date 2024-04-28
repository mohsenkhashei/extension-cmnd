const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router.js");
const path = require("path");
const CustomErrorHandler = require("./middlewares/CustomErrorHandler.js");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/", router);
app.use(CustomErrorHandler);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () =>
  console.log(`server running on PORT http://localhost:${PORT}`)
);
