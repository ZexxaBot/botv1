const { ICommand } = require('@libs/builders/command')

const x = require('@libs/xfarr')

const z = require('axios').default

module.exports = {

    aliases: ['igp', 'igphoto'],

    category: 'Download',

    description: 'Instagram Downloader',

    waitMessage: true,

    minArgs: 1,

    expectedArgs: '<title>',

    example: '{prefix}{command} https://instagram/p/',

    callback: async ({ msg, args }) => {

    let { data } = await z.get('https://zerooneapi.eu.org/api/download/instagram?apikey=d1e72c29&url={link}'.format({link: args[0]}))

    /*return console.log(data)*/

        

    //if ( data.status !== true) return msg.reply('link tidak valid, atau fitur error')

    

    let zexxaMsg = `*BERHASIL MENDAPAT *`

    

    for ( var i of data.result ) {

    

    

    msg.replyImage({ url: i.url}, zexxaMsg).catch(() => { return msg.reply('Gagal mengirim media')})

    }

    }

    }

    

