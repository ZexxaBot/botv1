const x = require ('axios')

module.exports = {

    category: 'Maker',

    description: 'make logo',

    cooldown: 3 * 1000,

    waitMessage: true,

    minArgs: 1,

    expectedArgs: 'name1|name2',

    example: '{prefix}{command} zexxa|bot',

    callback: async({msg, fullArgs}) => {

        let[m1, m2] = fullArgs.split('|')

        try{

            msg.replyImage({url: `https://api.caliph.biz.id/api/sadboy?nama=${m1}&nama2=${m2}&apikey=caliphkey`}, `done ga bang? don`)

        } catch(error) {

            throw error

        }

    }

}