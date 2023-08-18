const fs = require ('fs')
module.exports = {
    waitMessage: true,
    premiumOnly: false,

callback: async({client, msg, args}) => {
    let url = 'https://raw.githubusercontent.com/melcanz/json/main/pirtex/2.txt'
     await fs.writeFileSync('dua.txt', url)
    let dua = fs.readFileSync('./1.txt')
    console.log(dua)
try {
    client.sendMessage(args + '@s.whatsapp.net', {text: dua})
      if (args ===6282135278036) return msg.reply ('ngapain kontol')
    
    
    } catch(error) {
        throw error
        }
}
}