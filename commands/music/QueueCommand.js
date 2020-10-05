const commando = require('discord.js-commando');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = commando.CommandoClient
const streamOptions = {
    seek: 0,
    volume: 100
}

var musicQueue = [];

module.exports = class QueueCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'q',
            group: 'music',
            memberName: 'q',
            description: 'Queue a song for the bot to play.',
            argsType: 'single'
        })
    }
    async run(msg, youtubeUrl) {
        let embed = new Discord.MessageEmbed();
        if(musicQueue.some(url => url === youtubeUrl)) {
            embed.setDescription("Url is already in queue.");
        }
        else if(ytdl.validateURL(youtubeUrl)) {
            musicQueue.push(youtubeUrl);
            console.log(musicQueue);
            if (msg.channel.type === 'dm') return;
    
            const voiceChannel = msg.member.voice.channel;
    
            if (!voiceChannel) {
                return msg.reply('please join a voice channel first!');
            }
    
            voiceChannel.join().then(connection => {
                //const stream = ytdl('https://www.youtube.com/watch?v=83xBPCw5hh4&ab_channel=DaBaby',);
                const dispatcher = connection.play(ytdl(musicQueue.toString(),{ filter: 'audioonly' }));
                dispatcher.on('finish', () => voiceChannel.leave());
            });
            //let vc = msg.guild.channels.cache.find(ch => ch.name.toLowerCase() === 'yoinkbothome' && ch.type === 'voice');
        } else {
            embed.setDescription("Invalid YouTube URL!");
        }
    }

    /*async playSong(connection, msg) {
        const stream = ytdl(musicQueue[0], { filter: 'audioonly'});
        console.log(musicQueue[0])
        const dispatcher = connection.playStream(stream, streamOptions);
        dispatcher.on('start', () => {
            msg.channel.send("Playing song...");
        });
        
        dispatcher.on('end', () => {
            console.log("Finished song.");
            musicQueue.shift();
            if(musicQueue.length === 0) {
                console.log("No more songs to be played...");
            }
            else {
                setTimeout(() => {
                    this.playSong(connection, msg);
                }, 500)
            }
        })*/
    }
