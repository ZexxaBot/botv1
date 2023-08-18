const x = require ('axios')

module.exports = {
    category: 'Download',
    description: 'download ig post server 2',
    minArgs: 1,
    expectedArgs: '<link>',
    example: '{prefix}{command} https://instagram.com/p/xxxx',
    callback: async({msg, args}) => {
        try{
            let { data } = await x.get('https://api.caliph.biz.id/api/ig?url={link}&apikey=caliphkey'.format({link: args[0]}))
            if (data.status !== true) { return msg.reply('server error')
            }
            for ( let i of data.result.post ) {
                msg.replyImage({url: i.url}).catch(() => { return msg.reply('error saat mengirim media')})
            }
                
            
        } catch(e) {
            throw e
        }}
    }