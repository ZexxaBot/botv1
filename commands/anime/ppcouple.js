const x = require ('axios').default

module.exports = {
    name: ['couple'],
    category: 'Anime',
    description: 'search couple anime picture',
    waitMessage: true,
    example: '{prefix}{command}',
    callback: async ({msg, fullArgs}) => {
        let { data } = await x.get('https://api.caliph.biz.id/api/ppcouple?apikey=caliphkey').catch(() => { return msg.reply('apikey error')})
        msg.replyImage({url: data.cowo}, ` for male`).then(() => { return msg.replyImage({url: data.cewe}, ` for female`)}).catch(() => { return msg.reply('gagal mengirim media')})
    }
}