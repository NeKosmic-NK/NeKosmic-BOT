const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Itzy")
let json = res.data
let NeKosmicBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, NeKosmicBot, "*â¨Itzyâ¨*", 'â¢ðð®ðð¸ð¼ð¶ð²ð¬ - ððð£', 'ð¼SIGUIENTEð¼', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(kpopitzy|itzy)$/i
module.exports = handler
