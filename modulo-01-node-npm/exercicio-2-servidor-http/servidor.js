import { createServer } from "http";
import { readFile } from "fs/promises";
import { join, extname } from "path";

const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
};

const server = createServer(async (req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url;
  const filePath = join(process.cwd(), "public", url);

  try {
    const content = await readFile(filePath);
    const ext = extname(filePath);
    const mime = MIME[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": mime });
    res.end(content);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 - Arquivo não encontrado");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});