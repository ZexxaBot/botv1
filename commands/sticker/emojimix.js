const { ICommand } = require('@libs/builders/command')
const { writeExifImg } = require('@libs/converter/exif')
const fs = require('node-webpmux/io')
const x = require('axios').default
const api = require('caliph-api')


//api.other.emojimix(😅, 😌)
//.then(console.log);

/**
 * @type { ICommand }
 */
module.exports = {
    category: 'Sticker',
    description: 'Sticker Maker',
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<emoji1>+<emoji2>',
    example: '{prefix}{command} 😅+🤔',
    callback: async ({ msg, client, message, fullArgs }) => {
        const [m1, m2] = fullArgs.split('+')
        if (!m1) return msg.reply('cth: #emojimix 😅+🤔')
        if (!m2) return msg.reply('cth: #emojimix 😅+🤔')

       let xxx = await api.other.emojimix(`${encodeURIComponent(m1)}, ${encodeURIComponent(m2)}`)
       console.log(xxx)
       /* if (!data) return msg.reply('Server dalam perbaikkan')
        if (!data.results) return msg.reply('Server dalam perbaikkan')

        for (var i of data.results) {
            let buffer = await writeExifImg(i.url, { packname: 'Fajarara', author: '@shannbot.ofc' })
            await client.sendMessage(msg.from, { sticker: { url: buffer } }, { quoted: message }).catch(() => { return msg.reply('Terjadi kesalahan') })
        }
   */ },
}
