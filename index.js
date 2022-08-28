const jsonServer = require('json-server')
// import Database from './db.json'
const server = jsonServer.create();
const jsonRouter = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonRouter);
server.listen(5000, () => {
  console.log('JSON Server is running');
});