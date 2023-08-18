const { ICommand } = require ('@libs/builders/command')

const axios = require ('axios')

module.exports = {

    category: 'Stalking',

    description: 'Stalk Instagram Account',

    limit: true,

    waitMessage: true,

    minArgs: 1,

    expectedArgs: '<username>',

    example: '{prefix}{command} paujikerenbanget',

    callback: async ({ msg, fullArgs }) => {

    

    let { data } = await axios.get('https://api.botcahx.live/api/stalk/ig?username={query}&apikey=DeHBriJv'.format({ query: fullArgs}))

    if (data.status !== true) return msg.reply('username tidak ditemukan')

    

    let zexxaMsg = `*_BERHASIL STALKING ${data.result.username}_*\n\n`

    zexxaMsg += `*Acc Name: ${data.result.fullName}*\n`

    zexxaMsg += `*Followers: ${data.result.followers}*\n`

    zexxaMsg += `*Following: ${data.result.following}*\n`

    zexxaMsg += `*Total Post: ${data.result.postsCount}*\n`

    zexxaMsg += `*Bio: ${data.result.bio}*\n`

    

    msg.replyImage({url: 'https://telegra.ph/file/126ed94eb072c6ec7a18d.png'}, zexxaMsg).then(() =>

    { return msg.reply('1 limit terpakai')

    }).catch(() => { return msg.reply('error saat mengirim data')

    })

    }

    }