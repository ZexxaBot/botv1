const { ICommand } = require('@libs/builders/command')
const axios = require('axios').default


module.exports = {
    aliases: ['fbhd'],
    category: 'Premium',
    description: 'Facebook Downloader',
    waitMessage: true,
    premiumOnly: true,
    limit: true,
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://Facebook.com',
    callback: async ({ msg, args }) => {
                let { data } = await axios.get('https://api.botcahx.live/api/dowloader/fbdown?url={url}&apikey=DeHBriJv'.format({ url: args }))
                /* return console.log(data) */
                
                if ( data.status !== true) return msg.reply('cannot find HD video, try !fbsd')
                
                let zexxaMsg = `*BERHASIL MENDAPATKAN VIDEO HD*`
                
                msg.replyVideo({ url: data.result.HD }, zexxaMsg).catch(() => { return msg.reply('gagal mengirim video')})
                }
                
    }