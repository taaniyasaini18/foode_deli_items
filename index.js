const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Read db.json into memory
const dbFilePath = path.join(__dirname, 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));
const router = jsonServer.router(dbData);

server.use(router);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});