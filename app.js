const express = require("express");
const app = express();
const router = require("./routes/router");
const bodyParser = require("body-parser");
const path = require("path");
//body-parser
app.use(bodyParser.json());

// ejs
app.set("view engine", "ejs");
app.set("views", "views");

//use static
app.use(express.static(path.join(__dirname, "public")));

// router
app.use(router);

//port

const port = process.env.port || 7000;
app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
