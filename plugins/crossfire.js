let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/crossfire?q=${response}&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'crossfire.jpg', `Nih kak..\n*Subscribe https://www.youtube.com/channel/UCsvR9uwJPmSvuyucQ2a-ELA*`, m, false)
}
handler.help = ['crossfire'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(crossfire)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


