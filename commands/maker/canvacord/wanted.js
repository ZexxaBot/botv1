const { ICommand } = require('@libs/builders/command')
const x = require('canvacord')
const i18n = require('i18n')

/**
 * @type { ICommand }
 */
module.exports = {
    category: 'Maker',
    description: 'wanted maker',
    waitMessage: true,
    callback: async ({ msg }) => {
        const file = (await msg.download('buffer')) || (msg.quoted && (await msg.quoted.download('buffer')))
        if (msg.typeCheck.isImage || msg.typeCheck.isQuotedImage) {
            const result = await x.Canvas.wanted(file)
            await msg.replyImage(result, '_Done by ZexxaBot_')
        } else {
            msg.reply(i18n.__('sticker.no_media'))
        }
    },
}
