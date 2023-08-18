const { ICommand } = require('@libs/builders/command')

const axios = require('axios').default

module.exports = {
    aliases: ['kaneki', 'umaru', 'megumin', 'yotsuba', 'shinomiya', 'yumeko', 'tejina', 'shina', 'kabura', 'gremory', 'chiho', 'toukachan', 'akira', 'itori', 'kurumi', 'sagiri', 'eba', 'deidara', 'itachi', 'madara', 'naruto', 'chitoge', 'asuna', 'ayuzawa', 'emilia', 'hestia', 'inori', 'waifu'],

    category: 'Random',

    description: 'Random Anime Image',

    waitMessage: true,

    minArgs: 1,

    expectedArgs: '<title>',

    example: '{prefix}{command} Kaneki',

    callback: async ({ msg, fullArgs, client }) => {
    
            
           /* return console.log(data)*/

        
        msg.replyImage({url : 'https://api.botcahx.live/api/anime/{query}?apikey=DeHBriJv'.format({query: fullArgs})}, `random anime image`).catch(() => { return msg.reply('error saat mengirim gambar')})
        }
    }
                                           
                                           
                                           
                                           
                                         
                                           
                                           
                                           
                                           