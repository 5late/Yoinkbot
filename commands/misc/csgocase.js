const commando = require('discord.js-commando');

module.exports = class UnboxCSGOCase extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'unbox',
            group: 'misc',
            memberName: 'unbox',
            description: 'Unbox a Counter-Strike - Global Offensive Case.'
        })
    }
    async run(msg) {
        msg.reply('Welcome to the CSGO Case Simulator. To unbox a case, use the name of the case. The available cases are ```Fracture - ?fracture```. Enjoy, and go broke!')
    }
}