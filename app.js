require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { reset } = require("nodemon");

const app = express();
const port = 3001 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files
app.use(express.static("public"));

// template engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard"));

// Handle 404
app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
