const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const app = http.createServer((req, res) => {
  const urlParsed = url.parse(req.url, true).pathname;

  if (urlParsed === "/") {
    fs.readFile("form.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (urlParsed === "/register" && req.method.toLowerCase() === "post") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const formData = querystring.parse(data);

      const { name, email, password } = formData;

      if (password.length < 8) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Error: Password is less than 8 characters");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Registration success");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid url");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
