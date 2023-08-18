const { ICommand } = require('@libs/builders/command')
const axios = require('axios').default
const { apikey } = require('@config')

/**
 * @type { ICommand }
 */
module.exports = {
    category: 'Premium',
    description: 'XVIDEOS video downloader',
    premiumOnly: true,
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://xnxx.com/',
    callback: async ({ msg, args }) => {
        let { data } = await axios.get('https://api.botcahx.live/api/download/xvideosdl?url={url}&apikey=DeHBriJv'.format({ url: args[0] })).catch(() => { return msg.reply('link tidak valid') })
          if ( data.status !== true) return msg.reply('url tidak ditemukan')
        let zexxaMsg = `SUCCESFULLY DOWNLOADED\n\n*Title:${data.result.title}*\n*Keyword:${data.result.keyword}*\n*Views:
${data.result.views}*\n\n\n*VIDEO SEDANG DIMUAT!!!*`
        
        msg.replyImage({ url: (data.result.thumb ? data.result.thumb : '') }, zexxaMsg)
        
        msg.replyVideo({ url: (data.result.url ? data.result.url : '') }, `Download from ${args[0]}`).then(() => { return msg.reply('success send video')}).catch(() => { return msg.reply('failed send video') })
            
        
    },
}
