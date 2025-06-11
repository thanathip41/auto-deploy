const http = require('http');
const { version } = require('./package.json');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end(`release: Hello from Docker local!, Now Version: ${version}`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}, version ${version}`);
});
