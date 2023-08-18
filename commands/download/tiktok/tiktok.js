const { ICommand } = require('@libs/builders/command')
const axios = require('axios').default
const { apikey } = require('@config')
//const ttdl = require ('tiktok-video-downloader')

/**
 * @type { ICommand }
 */
module.exports = {
    aliases: ['tt', 'ttdl'],
    category: 'Download',
    description: 'Tiktok video downloader',
    waitMessage: true,
    limit: true,
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://vt.tiktok.com/ZSwWCk5o/',
    callback: async ({ msg, args }) => {
       let { data } = await axios.get('https://api.botcahx.live/api/dowloader/tiktok?url={url}&apikey=DeHBriJv'.format({ url: args[0] })).catch(() => { return msg.reply('link tidak valid') })

        msg.replyVideo({ url: (data.result.video ? data.result.video : '') }, `Download from ${args[0]}`).catch(() => { return msg.reply('Terjadi kesalahan saat mengirim media') })

    },

    noLimit: false,

}
