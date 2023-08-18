const { ICommand } = require('@libs/builders/command')
const axios = require('axios').default


module.exports = {
    aliases: ['fbsd'],
    category: 'Download',
    description: 'Facebook Downloader',
    waitMessage: true,
    limit: true,
    minArgs: 1,
    expectedArgs: '<title>',
    example: '{prefix}{command} https://Facebook.com',
    callback: async ({ msg, args }) => {
                let { data } = await axios.get('https://api.zahwazein.xyz/downloader/facebook?apikey=zenzkey_8bc01f5847&url={url}'.format({ url: args[0] }))
                 //return console.log(data) 
                
                if ( data.status !== 'OK') return msg.reply('cannot find video, try !fbhd')
                
                let zexxaMsg = `*BERHASIL MENDAPATKAN VIDEO*`
                let Msg2 = `*DATA DIDAPATKAN*\n*Title: ${data.result.title}*\n*Duration: ${data.result.duration}*\n*Source: ${args[0]}*\n\n*_MEDIA SEDANG DIKIRIM, TUNGGU!!!!_*`
                
                msg.replyImage({url: 'https://telegra.ph/file/95cc5d9ed59541d35d31b.png'}, Msg2).catch(() => { return msg.reply('error')})
                msg.replyVideo({ url: data.result.url }, zexxaMsg).catch(() => { return msg.reply('gagal mengirim video')})
                }
                
    }