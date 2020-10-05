const commando = require('discord.js-commando');
const client = commando.CommandoClient
const fs = require('fs')
const Discord = require('discord.js')
const ytdl = require('ytdl-core')

module.exports = class ProgrammerHumourMeme extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Plays a song.',
        })
    }
    async run (msg) {
           
            if (msg.channel.type === 'dm') return;
    
            const voiceChannel = msg.member.voice.channel;
    
            if (!voiceChannel) {
                return msg.reply('please join a voice channel first!');
            }
    
            voiceChannel.join().then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=83xBPCw5hh4&ab_channel=DaBaby', { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
    
                dispatcher.on('finish', () => voiceChannel.leave());
            });







        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        var information = [];
        information.push(name, id)
        var savedinfo = fs.readFileSync("./information.txt", {"encoding": "utf-8"});
        
      var newinfo = savedinfo;
    fs.writeFileSync("information.txt", newinfo.toString())
    
    fs.appendFileSync("information.txt", information.toString())

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        if(data.includes('Xurxx#7879')){
         console.log((datata.length / 29) - .689655172413794)
        }
      });
    }
}