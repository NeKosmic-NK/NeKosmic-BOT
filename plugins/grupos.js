let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*👑Hola👑, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de ™𝓝𝓮𝓚𝓸𝓼𝓶𝓲𝓬 - 𝓑𝓞𝓣*

*➤ Grupos oficiales del Bot:*
*1.-* *Soporte Técnico:* https://chat.whatsapp.com/FJAu5KYaawU5ty9apbdFmy

*2.-* *Familia Otaku:* https://chat.whatsapp.com/IVE30IhKwxsGbOunDFpOS2

*3.-* https://chat.whatsapp.com/Grupo-No-Creado

*4.-* https://chat.whatsapp.com/Grupo-No-Creado

*5.-* https://chat.whatsapp.com/Grupo-No-Creado
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 THE SHADOW BROKERS - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
