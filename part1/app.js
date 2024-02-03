const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./views/home.html", (err, data) => {
      res.write(data);
      res.end("");
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./views/about.html", (err, data) => {
      res.write(data);
      res.end("");
    });
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./views/contact.html", (err, data) => {
      res.write(data);
      res.end("");
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Invalid Url");
    res.end();
  }
});

server.listen(8000, () => console.log("Server running on port 8000"));
