// const express = require("express");
// const app = express();
// const port = process.env.PORT || 8000;

// app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.redirect("/blog");
// });

// app.get("/blog", (req, res) => {
//   res.sendFile(__dirname + `/public/public.html`);
// });

// app.get("/register", (req, res) => {
//   res.sendFile(__dirname + `/public/registration.html`);
// });

// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + `/public/login.html`);
// });

// app.get("/article/:id", (req, res) => {
//   res.sendFile(__dirname + `/public/read_more.html`);
// });

// app.listen(port, () => {
//   console.log(`App listening on port: ${port}`);
// });

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
