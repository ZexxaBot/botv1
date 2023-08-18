const x = require ('axios').default
module.exports = {
    category: 'Search',
    description: 'generate image with DALL-E',
    cooldown: 30 * 1000,
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<title>',
    example: '{prefix}{command} anime style',
    callback: async({msg, fullArgs}) => {
        let { data } = await x.get('https://api.caliph.biz.id/api/openai/dalle?query={text}}&apikey=caliphkey'.format({text: fullArgs}))
        if (data.status !== true) { return msg.reply('fitur error')
             }
             msg.replyImage({url: data.url}, `*NIH BANG*`).catch(() => { return msg.reply('gagal saat mengirim media')
                 })

    }
}