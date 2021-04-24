const commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const config = require(path.join(__dirname, '../../config', 'config.json'))
const ytdl = require('ytdl-core');
const search = require('youtube-search')
const client = commando.CommandoClient
const Youtube = require('simple-youtube-api');
const youtube = new Youtube(config.youtubeAPI);

const YouTube = require('youtube-node');
const youTube = new YouTube();
youTube.setKey()
const streamOptions = {
    seek: 0,
    volume: 100
}
const prefix = '?'

var musicQueue = [];


module.exports = class QueueCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'p',
            group: 'music',
            memberName: 'p',
            description: 'Queue a song for the bot to play.',
            argsType: 'single'
        })
    }
    async run(msg, youtubeUrl) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const query = args.join(' ');
    
   
    const voiceChannel = msg.member.voice.channel;
            let embed = new Discord.MessageEmbed();
            if(musicQueue.some(url => url === youtubeUrl)) {
                embed.setDescription("Url is already in queue.");
            }else if(ytdl.validateURL(youtubeUrl)) {
            musicQueue.push(youtubeUrl);
            console.log(musicQueue); 
        
            if (msg.channel.type === 'dm') return;
            if (!voiceChannel) {
            return msg.reply('please join a voice channel first!');
        }
        if (voiceChannel.connection){ return console.log('this works!!')}
        else{

            const embed = new Discord.MessageEmbed()
                .setTitle('Now playing...')
                .setURL(youtubeUrl)
                .setDescription(youtubeUrl)
                .setFooter("Yoinkbot collects your username and tag to improve our services. To find whats being collected contact the bot owner with the command '?owner'")
            msg.channel.send(embed)
            voiceChannel.join().then( connection => {
            const stream = ytdl(musicQueue.toString(), { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
                dispatcher.setVolume(0.40);
            dispatcher.on('end', () => voiceChannel.leave());
    });
    }
}
    }
}
