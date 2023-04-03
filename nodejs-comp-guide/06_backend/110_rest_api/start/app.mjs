import express from 'express';
import apiRoutes from './api-route/index.mjs'

const PORT = 8080;
const app = express();

app.use(express.json());
app.use('/api',apiRoutes);//routerを読み込む、第一引数にURLを指定するとリクエストパラメータとして使用できる

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
