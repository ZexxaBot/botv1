const { ICommand } = require('@libs/builders/command')
const x = require('@libs/xfarr')

/**
 * @type { ICommand }
 */
module.exports = {
    category: 'Convert',
    description: 'Screenshot Website',
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<url>',
    example: '{prefix}{command} https://yourweb.site/',
    callback: async ({ msg, fullArgs }) => {
        const { result } = await x.tools.ssweb(fullArgs)

        msg.replyImage(result, fullArgs).catch(() => { return msg.reply('Terjadi kesalahan') })
    }
}