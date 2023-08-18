const { ICommand } = require('@libs/builders/command')
const axios = require('axios').default

module.exports = {
    category: 'Premium',
    description: 'Search XVIDEOS videos',
    premiumOnly: true,
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<title>',
    example: '{prefix}{command} step mom',
    callback: async ({ msg, fullArgs }) => {
        let xxx = await axios.get('https://api.botcahx.live/api/search/xvideos?query={query}&apikey=DeHBriJv'.format({ query: fullArgs })).catch(() => { return msg.reply('tidak ditemukan') })
        /*return console.log(xxx)*/
      if (xxx.data.status !== true) return msg.reply('Fitur sedang error')
        let shannMsg = `「 SUKSES MENDAPATKAN DATA 」`
        for (let i of xxx.data.result) {
            
            shannMsg += `\n\n──────────────────────`
            shannMsg += `\n\n⦿ Title: ${i.title}`
            shannMsg += `\n\n⦿ Views: ${i.views}`
            shannMsg += `\n\n⦿ Quality: ${i.quality}`
            shannMsg += `\n⦿ Link: ${i.url}`
        
        
        msg.replyImage({url: i.thumb}, shannMsg ).catch(() => { return msg.reply('Terjadi kesalahan') })
        }
    },
}