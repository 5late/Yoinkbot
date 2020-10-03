const commando = require('discord.js-commando');

module.exports = class JoinVoiceChannelCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins a voice channel.'
        })
    }
    async run(msg) {
        let vc = msg.guild.channels.cache.find(ch => ch.name.toLowerCase() === 'yoinkbothome' && ch.type === 'voice');
        if(vc && !vc.connection) {
            await vc.join();
        }
        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        var information = [];
        information.push(name, id)
        fs.readFile("./information.txt", function (err, data) {
            if (err) throw err;
            var datata = data.toString('utf-8')
            if(data.includes('Xurxx#7879')){
             console.log((datata.length / 29) - .689655172413794)
            }
          });
    }
}