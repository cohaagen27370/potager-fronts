const http = require('http');
const httpProxy = require('http-proxy'); // npm install http-proxy

const proxy = httpProxy.createProxyServer({});

http.createServer((req, res) => {
    if (req.url.startsWith('/inprogress')) {
        // Redirige vers l'app inprogress
        proxy.web(req, res, { target: 'http://localhost:4202' });
    } else {
        // Redirige vers l'app dashboard par défaut
        proxy.web(req, res, { target: 'http://localhost:4201' });
    }
}).listen(8080, () => {
    console.log('Proxy local lancé sur http://localhost:8080');
});