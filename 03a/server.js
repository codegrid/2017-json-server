const jsonServer = require('json-server');

const app = jsonServer.create();

const middlewares = jsonServer.defaults();
app.use(middlewares);

const router = jsonServer.router('db.json');
app.use(router);

app.listen(3000, () => {
  console.log('JSON Server is running. http://localhost:3000');
});
