const commando = require('discord.js-commando');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const search = require('youtube-search')
const client = commando.CommandoClient
const Youtube = require('simple-youtube-api');
const youtube = new Youtube("apikey);
const talkedRecently = new Set();

const yts = require('yt-search');
const YouTube = require('youtube-node');
const youTube = new YouTube();
youTube.setKey()
const streamOptions = {
    seek: 0,
    volume: 100
}
const prefix = '?'

var musicQueue = [];
var ysearch = [];

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
    const user = msg.member.user.tag
      if (talkedRecently.has(msg.author.id)) {
        return msg.channel.send("Cooldown! Wait 45 seconds before this command again. - " + user);
        
} else {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const query = args.join(' ');
    const videos = await youtube.searchVideos(query, 1)
    const user = msg.member.user.tag
    const dated = new Date().toLocaleString();

    console.log(videos)
    //msg.channel.send('https://www.youtube.com/results?search_query=' + query)
 
    const choice = args[0];
    const voiceChannel = msg.member.voice.channel;

    if (choice === 'skip') return musicQueue.shift();
    if (choice === 'stop') {voiceChannel.guild.me.edit({mute:true});}
    else(voiceChannel.guild.me.edit({mute:false}))
    console.log(choice)
    if (!videos.length) return msg.channel.send("No songs were found!");
        const song = {
            title: videos[0].title,
            url: videos[0].url,
            image: videos[0].thumbnail
    };
    console.log(song.url.toString())
    var songurl = song.url;
    
            let embed = new Discord.MessageEmbed();
            /*if(musicQueue.some(url => url === youtubeUrl)) {
                embed.setDescription("Url is already in queue.");
            }else if(ytdl.validateURL(youtubeUrl))*/ 
            musicQueue.push(songurl);
            console.log( user + ' | ' + dated + ' | ' + song.title + ' | ' + musicQueue); 
        
            if (msg.channel.type === 'dm') return;
            if (!voiceChannel) {
            return msg.reply('please join a voice channel first!');
        }
        if (voiceChannel.connection){ return console.log('this works!!')}
        else{
            const embed = new Discord.MessageEmbed()
                .setTitle(song.title)
                .setURL(songurl)
                .setThumbnail(song.image)
                .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")
            msg.channel.send(embed)
            voiceChannel.join().then( connection => {
            const stream = ytdl(musicQueue.toString(), { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
                dispatcher.setVolume(0.40);
            dispatcher.on('end', () => musicQueue.shift());
            //dispatcher.on('end', () => voiceChannel.leave());
            
            

            switch (choice){
                case 'pause':{
                        dispatcher.pause()
                        msg.react('⏸️')
                        break;
                }
                case 'unpause':{
                        dispatcher.unpause()
                        msg.react('⏯️')
                        break;
                }
                case 'skip':{
                        musicQueue.shift().then(
                        msg.react('⏩'))
                        break;
                }
                case 'stop': {
                    dispatcher.pause()
                    musicQueue = []
                    break;
                }
                case 'loop': {
                    
                }
        
            
            }
    //} else {
      //  embed.setDescription("Invalid YouTube URL!");


        
    });
}  
    }
        
    
            //dispatcher.on('finish', () => voiceChannel.leave());            
        
                       


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
    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(msg.author.id);
    }, 10000);
}
}


