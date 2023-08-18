const { ICommand } = require ('@libs/builders/command')

const axios = require ('axios')

module.exports = {

    category: 'youtube',

    description: 'play mp4 video',

    cooldown: 60 * 1000,
    limit: true,

    waitMessage: true,

    minArgs: 1,

    expectedArgs: '<title>',

    example: '{prefix}{command} rrq vs ae',

    callback: async ({ msg, fullArgs }) => {
    let { data } = await axios.get('https://api.zahwazein.xyz/downloader/ytplay?apikey=zenzkey_8bc01f5847&query={text}'.format({text: fullArgs}))
    if (data.status !=='OK') return msg.reply('query error/video tidak ada')
    
    let zexxa = `*Title: ${data.result.title}*\n*Duration: ${data.result.duration}*\n*Source: ${data.result.source}*\n`
    msg.replyVideo({url: data.result.getVideo}, zexxa).catch(() => { return msg.reply('gagal mengirim file')})
    }
    }

    