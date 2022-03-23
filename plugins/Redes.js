let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './undefined.jpg'
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
 ⎈𝐑𝐞𝐝𝐞𝐬⎈
 ꒷꒦꒷꒦꒷꒦꒷꒦
║➤𝐘𝐨𝐮𝐭𝐮𝐛𝐞:
║➤𝐋𝐢𝐧𝐤: https://youtube.com/channel/UCls7-M5w1ViDC37yTBQs8ag
║➤𝐓𝐢𝐤𝐓𝐨𝐤: 
║➤𝐋𝐢𝐧𝐤: https://vm.tiktok.com/ZMLm4r1Fe/
║➤𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦:
║➤𝐋𝐢𝐧𝐤: https://www.instagram.com/invites/contact/?i=lytcupbm7ds9&utm_content=o5vctb8
║➤𝐏𝐚𝐲𝐏𝐚𝐥: https://www.paypal.me/NeKosmicOFC

*_「  *N̶̛͋̄̊̓̇͐̂͠e̷̖̩̾̆̾̓̾̓̂K̴̙̭̪̅͑̿̚ó̷̙͔͒̉̆̈́͝͝s̴̼͎̝̺͔͈̈̄̾m̸̢͕̒̒̃́͘͝͠į̷͚̮̩̂̍͆͜c̵͙̼̈̾̍͛̉̈́̚ - B̵̠̤̘̜̈́͝O̷̍͂͒̏̒͋̈́̐̅Ṫ̵̹̓̌̀̕͝͝͝*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['Redes']
handler.tags = ['General']
handler.command = /^(redes|Redes|redes sociales|Redes sociales)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
