const x = require ('axios')
const config = require ('@config')
module.exports = {
    name: ['igreels2'],
    category: 'Download',
    description: 'download reels ig server 2',
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://instagram/reel/xxxxx',
    callback: async({msg, args}) => {
        try{
            let { data } = await x.get('https://api.caliph.biz.id/api/ig?url={link}&apikey=caliphkey'.format({link: args[0]}))
            console.log(data)
            if (data.status !== true) { 
            return msg.reply('server error')
            }
            for ( var i of data.result.post ) {
                msg.replyVideo({url: i.url}).catch(() => { 
                    return msg.reply('gagal mengirim video')
                })
            }
        } catch(e) {
            throw e
        }
    }
}




