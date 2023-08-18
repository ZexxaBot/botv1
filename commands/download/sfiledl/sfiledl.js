const { ICommand } = require('@libs/builders/command')
const logger = require ('@libs/utils/logger')
const x = require('axios')

module.exports = {

    category: 'Premium',

    description: 'Download File From Sfile',

    waitMessage: true,

    premiumOnly: true,
    
    minArgs: 1,

    expectedArgs: '<link>',

    example: '{prefix}{command} sfile',

    callback: async ({ msg, args }) => {
        try {
            let data = await x.get('https://xzn.wtf/api/sfiledl?url={link}&apikey=zexxabot'.format({link: args[0]}))
//console.log(data)
          
      //console.log(mime)
           let msgX = `*BERHASIL MENDOWNLOAD FILE*\n\n*Title: ${data.data.name}*\n*Type: ${data.data.type}*\n*Size: ${data.data.size}*\n*Author: ${data.data.uploadBy}*\n*Upload Date: ${data.data.uploadDate}*\n*Total Download: ${data.data.downloads}*\n\n*_FILE SEDANG DIKIRIM_*`
           
           msg.reply(msgX)
           
           let res = await x.head(data.data.url)
        //  console.log(res)
     let mime = res.headers['content-type']
               
              msg.replyDocument({ url: data.data.url }, mime, data.data.name).catch(() => { return mime.reply('gagal')})
            } catch(error) {
                logger.error(error)
                }

                      
        }
    }
                                 
                                 
                                 
                                 
                                 
                                 
