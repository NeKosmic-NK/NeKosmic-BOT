const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/futbol")
let json = res.data
let NeKosmicBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, NeKosmicBot, "*Fรบtbol ๐ฅ*", 'โข๐๐ฎ๐๐ธ๐ผ๐ถ๐ฒ๐ฌ - ๐๐๐ฃ', 'โฝ SIGUIENTE โฝ', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(futbol|fรบtbol)$/i
module.exports = handler
