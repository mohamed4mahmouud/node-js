const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.write("Home page");
  res.end("");
});

app.listen(8080, () => console.log("server running......"));
