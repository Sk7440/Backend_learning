const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "Get", "POST", "PUT", "DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our server");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to About page");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Contact page");
  } else if (req.url === "/products" && req.method === "GET") {
    const products = [
      { id: 1, name: "Product 1", price: 10.99 },
      { id: 2, name: "Product 2", price: 19.99 },
      { id: 3, name: "Product 3", price: 5.99 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
 
});

 server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
