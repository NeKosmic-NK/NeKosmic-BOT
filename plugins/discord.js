let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './menu.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
─━─━─━∞◆∞━─━─━─┓
༆⋆⃟⋆⃟:🍥:LATĀM:🍥:eᬽ⃤
┗─━─━─━∞◆∞━─━─━─┛

━━━┃┫╋┃┫『∞』┣┃╋┣┃━━━

╔═══◄••¿𝖰𝗎𝖾 𝗈𝖿𝗋𝖾𝖼𝖾𝗆𝗈𝗌?••►════╗
╠『✨』₊·-͟͟͞⟡➤Staff activo y servicial✩﻿
╠『🤗』₊·-͟͟͞⟡➤Usuarios sociales y amigables✩﻿
╠『😁』₊·-͟͟͞⟡➤Mucho NSFW✩﻿
╠『🎨』₊·-͟͟͞⟡➤Servidor ordenado y configurado✩﻿
╠『🌠』₊·-͟͟͞⟡➤Roles y variedad de colores✩﻿
╠『🎶』₊·-͟͟͞⟡➤Canales de charla✩﻿
╠『🎁』₊·-͟͟͞⟡➤Alianzas con otros servidores✩﻿
╠『😎』₊·-͟͟͞⟡➤Canales de shitpost, videos, memes y más✩﻿
╠『👾』₊·-͟͟͞⟡➤Canales de entretenimiento✩﻿
╠『🤩』₊·-͟͟͞⟡➤Únete para conocer mas acerca del servidor✩﻿
╚═══◄••𝖤𝗌𝗉𝖾𝗋𝗈 𝗍𝖾 𝗀𝗎𝗌𝗍𝖾••►═════╝ 

✺  *         ⊹. 　   ·  ✦˚  · .　　  ·*   　.
· 　 . * *   　. NIGHT CITY * ˚  　　 · . ·
✦ ˚  　· 　 .· 　　   ✵  ✫•.   ✶✺  *         ⊹
 
 ꧁ENTRA Y DISFRUTA DEL SERVER꧂

❖Server: https://discord.gg/HQAkfXpd
*_「  *_「   ͚͜͝͠ ͚͜͝͠𝐍 ͚͜͝͠ ͚͜͝͠𝐞 ͚͜͝͠ ͚͜͝͠𝐊 ͚͜͝͠ ͚͜͝͠𝐨 ͚͜͝͠ ͚͜͝͠𝐭 ͚͜͝͠ ͚͜͝͠𝐢  ͚͜͝͠𝐧 ͚͜͝͠𝐞 ͚͜͝͠- ͚͜͝͠𝐁  ͚͜͝͠𝐎𝐓͚͜͝͠  」*`.trim()


conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 NEKOSMIC - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./menu.jpg`)}}}})}

handler.command = /^(discord|Discord|discord-server)$/i
module.exports = handler