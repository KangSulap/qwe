let handler = function (m) {
  // this.sendContact(m.chat, '6285870935530', 'Vinz Bot', m)
  this.sendContact(m.chat, '6285870935530', 'Vinz Bot', m)
  m.reply('Waitt...')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
