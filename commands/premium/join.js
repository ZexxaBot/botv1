const moment = require('moment-timezone')

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
    category: 'Premium',
    description: 'Join group by link.',
    premiumOnly: true,
    
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://chat.whatsapp.com/xxxxxxxxxxxxxxxx',
    callback: async ({ msg, client, args }) => {
        return client.groupAcceptInvite(args[0].replace('https://chat.whatsapp.com/', '')).then(() => {
            return msg.reply('Join success.')
        })
    },
}