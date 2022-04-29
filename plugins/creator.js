function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '34623442554', 'NeKosmic - Owner', m)
this.sendContact(m.chat, '97255-723-4456', 'NeKosmic - Creador - Oficial 2', m)
this.sendContact(m.chat, '97255-704-9012', 'NeKosmic - BOT', m)
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
