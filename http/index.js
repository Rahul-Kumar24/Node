const fs = require("fs");

http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from the home side");
  } else if (req.url == "/about") {
    res.end("Hello from the others side");
  } else if (req.url == "/useaapi") {
    // fs.readFile(`${__dirname}/userapi/useaapi.json`, "utf-8", (err, data) => {
    console.log(data);
    // res.end(data);
    // });
  } else {
    console.log("page does not exist");
  }
});

server.listen(8345, "127.0.0.1", () => {
  console.log("listening to the port no 8345");
});
