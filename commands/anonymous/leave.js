const { ICommand } = require('@libs/builders/command')

const knex = require('@database/connection')

/**

 * @type { ICommand }

 */

module.exports = {

    aliases: ['stop'],
    
    category: 'Anonymous',

    description: 'Send your secret message',

    privateOnly: true,

    callback: async ({ msg, client }) => {

        let users = await knex('anonymous').where({ room_a: msg.from, status: 'chatting' }).first()

        let finds = await knex('anonymous').where({ room_b: msg.from, status: 'chatting' }).first()

        if (!users && !finds) return msg.reply('Kamu tidak sedang berada dalam sesi anonymous')

        if (users && !finds) {

            await knex('anonymous').where({ room_a: users.room_a, status: 'chatting' }).first().update('status', 'lostcontact')

                .then(async () => {

                    if (users.room_b !== 'kosong') {

                        client.sendMessage(users.room_b, { text: '```Partner meninggalkan sesi```' })

                        return msg.reply('ok')

                    } else {

                        return msg.reply('ok')

                    }

                }).catch(() => { return msg.reply('Terjadi kesalahan') })

        } else if (!users && finds) {

            await knex('anonymous').where({ room_b: finds.room_b, status: 'chatting' }).first().update('status', 'lostcontact')

                .then(async () => {

                    client.sendMessage(finds.room_a, { text: '```Partner meninggalkan sesi```' })

                    return msg.reply('ok')

                }).catch(() => { return msg.reply('Terjadi kesalahan') })

        }

    }

}