import http from 'node:http';import fs from 'node:fs';
const port=Number(process.env.PORT)||3000;
http.createServer((req,res)=>{if(!['/','/index.html'].includes(req.url.split('?')[0])){res.writeHead(404);res.end('No encontrado');return}res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(fs.readFileSync('dist/index.html'))}).listen(port,()=>console.log(`POSH: http://localhost:${port}`));
