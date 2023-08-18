const x = require ('axios').default
const { ICommand } = require ('@libs/builders/command')
module.exports = {

    category: 'youtube',

    description: 'download mp4 server 2',

    cooldown: 30 * 1000,

    waitMessage: true,

    minArgs: 1,

    expectedArgs: '<title>',

    example: '{prefix}{command} https://youtu.be/LsyvuEegVA4',

    callback: async({msg, args}) => {

        let z = await x.get('https://zerooneapi.eu.org/api/download/ytmp4?apikey=d1e72c29&url={link}'.format({link: args[0]}))

        //if (z.status !== true) { return msg.reply('server error')

        console.log(z)

        let msgX = `*DATA BERHASIL DIDAPAT*\n\n`

        msgX += `*Title: ${z.data.title}*`

        msgX += `\n*Size: ${z.data.size}KB*`

        msgX += `\n\n*_VIDEO SEDANG DIMUAT!!!_*`

        msg.replyImage({url: z.data.thumbnail}, msgX)

        msg.replyVideo({url: z.data.download}).catch(() => { return msg.reply ('gagal mengirim video')

            })

            

        }

    }

    

