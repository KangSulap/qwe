let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/sandw?apikey=PutriCntq&text=${response}`
  conn.sendFile(m.chat, res, 'sandw.jpg', `Nih kak../nTutor Bot Nih https://youtu.be/2BCaUXinTxY..\n*Subscribe https://www.youtube.com/channel/UCsvR9uwJPmSvuyucQ2a-ELA`, m, false)
}
handler.help = ['sandw'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(sandw)$/i
handler.register = true

module.exports = handler

