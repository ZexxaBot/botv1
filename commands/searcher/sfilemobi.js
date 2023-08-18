const x = require ('axios')

module.exports = {
    category: 'Search',
    description: 'search file from sfile mobi',
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<name>',
    example: '{prefix}{command} opok telkomsel',
    callback: async({msg, client, fullArgs}) => {
        try {
            let { data } = await x.get('https://xzn.wtf/api/sfilesearch?title={txt}&page=1&apikey=zexxabot'.format({txt: fullArgs})).catch(() => {
                return msg.reply('file tidak ada')
            })
            for ( var i of data) {
            let msgX = `*DATA DIDAPATKAN*\n\n`
            msgX += `*Title: ${i.name}*`
            msgX += `\n*Size: ${i.size}*`
            msgX += `\n*Url: ${i.url}*`
            msgX += `\n\n*_DOWNLOAD FILE MENGGUNAKAN #sfiledl url_*`
            msg.reply(msgX).catch(() =>{
                return msg.reply('gagal mengirim data')
            })
            }
        } catch(e) {
            throw e
        }
    }
}