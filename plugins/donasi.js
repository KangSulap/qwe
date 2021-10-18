let handler = async m => m.reply(`
╭─「 Donasi • BOT 」
│ • gopay [08816406389]
│ • DANA [08816406389]
│ • OVO  [083171186675]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
