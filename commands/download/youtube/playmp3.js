const { ICommand } = require ('@libs/builders/command')
const fetch = require ('node-fetch')

module.exports = {
    aliases: ['play'],
    category: 'youtube',
    description: 'play music server 2',
    cooldown: 20 * 1000,
    waitMessage: true,
    minArgs: 1,
    expectedArgs: '<title>',
    example: '{prefix}{command} lagu jorok - baon cikadap',
    callback: async ({client, message, msg, fullArgs }) => {
        try {
    let res = await             fetch(`https://zerooneapi.eu.org/api/search/ytplay?apikey=d1e72c29&text=${fullArgs}`).catch(() => { return msg.reply('apikey gagal')})
    if (!res.ok) throw 'eror'
    let json = await res.json()
    if (!json.status) throw 'gagal'
//console.log(json)
    await client.sendMessage(msg.from, { audio: json.result.mp3.result, mimetype: 'audio/mpeg' }, { quoted: message }).catch(() => { return msg.reply('gagal mengirim audio')})
            } catch(err) {
                throw err
                console.log(err)
                }
    }
    }

