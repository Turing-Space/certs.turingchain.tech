const express = require('express');
const next = require('next');
const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const cors = require('cors');
const app = next({ dev });
const handle = app.getRequestHandler();
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./i18n');

app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.use(nextI18NextMiddleware(nextI18next));
  server.use(cors());
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
