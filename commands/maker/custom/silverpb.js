const { ICommand } = require ('@libs/builders/command')

const axios = require ('axios')

module.exports = {

    category: 'Maker',

    description: 'make silver play button',

    limit: true,

    waitMessage: true,

    minArgs: 1,

    expectedArgs: 'title',

    example: '{prefix}{command} ZexxaBot',

    callback: async ({ msg, fullArgs }) => {
    msg.replyImage({url: `https://api.botcahx.live/api/ephoto/ytsilverbutton?text=${fullArgs}&apikey=DeHBriJv`})
    }
    }

    