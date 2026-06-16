const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8899;
const DIR = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.wasm': 'application/wasm',
  '.json': 'application/json',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/dandelion-world.html';

  const filePath = path.join(DIR, decodeURIComponent(urlPath));

  // 安全检查：只允许访问当前目录
  if (!filePath.startsWith(DIR)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found: ' + urlPath); return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const ct = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': ct,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('\n====================================');
  console.log('  🌸 蒲公英梦境本地服务器已启动！');
  console.log(`  请在浏览器打开：`);
  console.log(`  http://localhost:${PORT}`);
  console.log('====================================\n');
  console.log('按 Ctrl+C 停止服务器\n');
});
