const { ICommand } = require("@libs/builders/command")
const axios = require('axios').default
const config = require('@config')
const { TelegraPh } = require('@libs/converter/upload')
const fs = require('fs')

/**
 * @type { ICommand }
 */
module.exports = {
    aliases: ['removebackground'],
    category: 'Convert',
    description: 'Remove Background',
    waitMessage: true,
    callback: async ({ msg, client, message }) => {
        const image = (await msg.download('buffer')) || (msg.quoted && (await msg.quoted.download('buffer')))
        if (msg.typeCheck.isImage || msg.typeCheck.isQuotedImage) {
            await fs.writeFileSync('./database/src/shanndev.jpg', image)
            let file = await TelegraPh('./database/src/shanndev.jpg')
            client.sendMessage(msg.from, { document: { url: `https://shanndevapi.com/api/converter/removebg?img=${file}` }, mimetype: 'image/png', fileName: 'Removebg.png' }, { quoted: message }).catch(() => { return msg.reply('Terjadi kesalahan') })
            fs.unlinkSync('./database/src/shanndev.jpg')
        } else return msg.reply('Send/reply image dengan caption #removebg')
    }
}
