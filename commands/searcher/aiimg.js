const { ICommand } = require('@libs/builders/command')
const axios = require('axios').default

module.exports = {
    category: 'Search',
    description: 'Search for Image by AI',
    premiumOnly: true,
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<title>',
    example: '{prefix}{command} Anime',
    callback: async ({ msg, fullArgs }) => {
        
        /*return console.log(data)*/
        
        let zexxaMsg = `*Reply dengan caption /s*\n*untuk membuat sticker*`
        
        msg.replyImage({ url: 'https://api.botcahx.live/api/search/openai-image?text={query}&apikey=DeHBriJv'.format({ query: fullArgs })}, zexxaMsg).catch(() => { return msg.reply('Terjadi kesalahan') })
    },
}