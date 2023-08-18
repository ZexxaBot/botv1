const { ICommand } = require('@libs/builders/command')
const x = require ('caliph-api')
const axios = require('axios').default

module.exports = {

    category: 'Search',

    description: 'Search Sfilemobi File',

    cooldown: 10 * 1000,
    waitMessage: true,
    limit: true,

    minArgs: 1,

    expectedArgs: '<title>',

    example: '{prefix}{command} Anime',

    callback: async ({ msg, fullArgs }) => {
        let xxx = await axios.get('https://api.zahwazein.xyz/searching/sfilesearch?query={query}&apikey=zenzkey_8bc01f5847'.format({query: fullArgs}))
        //let { data } = await x.search.sfile(fullArgs)
        if (xxx.data.status !== 'OK') return msg.reply('file not found or error')
        //return console.log(data)
        
        let zexxaMsg = `*SUCCESSFULL GENERATE FILE*\n\n`
        for ( var x of xxx.data.result ) {
        zexxaMsg += `*Title: ${x.name}*\n`
        zexxaMsg += `*Link: ${x.link}*\n\n`
        
        msg.reply(zexxaMsg).catch(() => { return msg.reply('Terjadi kesalahan') })
            }
         }
    }