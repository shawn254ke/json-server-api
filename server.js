
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middlewares (CORS, logging, etc.)
server.use(middlewares);

// Mount the router
server.use(router);

// Listen on the environment port (Render uses process.env.PORT)
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running...');
});
