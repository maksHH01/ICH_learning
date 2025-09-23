import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  switch (request.url) {
    case "/":
      return response.end("<h1>Welcome to the Home Page!</h1>");
    case "/about":
      return response.end("<h1>About Us</h1>");
    default:
      response.statusCode = 404;
      response.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => console.log("Server running on 3000 port"));
