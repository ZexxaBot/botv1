const { ICommand } = require('@libs/builders/command')
const knex = require('@database/connection')
const { timeFormat } = require('@libs/utils')
const x = require('axios').default
const c = require("@config")

/**
 * @type { ICommand }
 */
module.exports = {
    category: 'Owner',
    description: 'Test bot response.',
    ownerOnly: true,
    cooldown: 10 * 1000,
    callback: async ({ msg, message }) => {
        const { data } = await x.get('https://api.botcahx.live/api/checkkey?apikey={apikey}'.format({ apikey: c.botcah })).catch(console.log)
        const api = data ? data : ''
        const result = api ? api.result : ''
        const userCount = await knex('users')
        const userPrem = await knex('users').where({ user_premium: true })

        const msgAPi = result ? `[ *INFORMASI API* ]

📍 Limit : ${result.limit}
📍 Premium : ${result.premium}
📍 Expired : ${result.expired}
📍 Username : ${result.username}\n\n` : ''

        const shannMsg = `${msgAPi}[ *INFORMASI BOT* ]

📍 Premium : ${userPrem.length}
📍 Pengguna : ${userCount.length}
📍 Runtime : ${timeFormat(process.uptime())}`

        msg.reply(shannMsg)
    },
}
