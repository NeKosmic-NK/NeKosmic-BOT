let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
━━━┃┫╋┃┫『∞』┣┃╋┣┃━━━
╔═══◄••NeKosmic••►════╗
╠ Para utilizar el Bot
╠ debes escribir la 
╠ contraseña que te 
╠ dara mi owner 7w7
╠『✨』₊·-͟͟͞⟡➤Clave:###
╚═══◄••NeKosmic••►═════╝ 
✺  *         ⊹. 　   ·  ✦˚  · .　　  ·*   　.
· 　 . * *   　. NeKosmic-NK * ˚  　　 · . ·
✦ ˚  　· 　 .· 　　   ✵  ✫•.   ✶✺  *         ⊹
                ꧁7w7꧂
*_「  *_「  N̶̛͋̄̊̓̇͐̂͠e̷̖̩̾̆̾̓̾̓̂K̴̙̭̪̅͑̿̚ó̷̙͔͒̉̆̈́͝͝s̴̼͎̝̺͔͈̈̄̾m̸̢͕̒̒̃́͘͝͠į̷͚̮̩̂̍͆͜c̵͙̼̈̾̍͛̉̈́̚ - B̵̠̤̘̜̈́͝O̷̍͂͒̏̒͋̈́̐̅Ṫ̵̹̓̌̀̕͝͝͝  」*`.trim()
conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 NEKOSMIC - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./menu.jpg`)}}}})}

handler.command = /^(serbot|jadibot|sersubbot|sersubot)$/i
module.exports = handler
