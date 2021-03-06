const jsonServer = require('json-server');

// Expressをインスタンス化する
const app = jsonServer.create();

const middlewares = jsonServer.defaults();
app.use(middlewares);

// const router = jsonServer.router('db.json');
// app.use(router);
const resourceCollector = require('./resource-collector');
resourceCollector(
  'api',
  (vPath, routeJson) => app.use(vPath, jsonServer.router(routeJson))
);

app.listen(3000, () => {
  console.log('JSON Server is running. http://localhost:3000');
});
