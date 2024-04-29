const express = require("express");
const bodyParser = require("body-paser");
const path = require("path");
const app = express();

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const router = require("./router.js");
const CustomErrorHandler = require("./middlewares/CustomErrorHandler.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/", router);
app.use(CustomErrorHandler);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () =>
  console.log(`server running on PORT http://localhost:${PORT}`)
);
