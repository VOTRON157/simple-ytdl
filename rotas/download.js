const express = require("express");
const router = express.Router();
const ytdl = require("ytdl-core")
const fs = require('node:fs');

router.get("/download", async (req, res) => {
    const url = req.query.url // /download?url=
    if (!ytdl.validateURL(url)) return res.status(400).json({ erro: "Isso não é um video do Youtube." }) // Mensagem de erro.
    ytdl(url)
        .pipe(fs.createWriteStream('./public/videos/video.mp4'))
        .on('finish', () => {
            return res.download('./public/videos/video.mp4') // Iniciando o download do arquivo no navegador do usuario.
        })
})

module.exports = router;