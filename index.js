const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.redirect("/blog");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + `/public/public.html`);
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + `/public/registration.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + `/public/login.html`);
});

app.get("/article/:id", (req, res) => {
  res.sendFile(__dirname + `/public/read_more.html`);
});

app.listen(port);


