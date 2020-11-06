const commando = require('discord.js-commando');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const search = require('youtube-search')
const client = commando.CommandoClient
const path = require('path');
const { length } = require('ffmpeg-static');
const { sign } = require('crypto');
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))
const talkedRecently = new Set();
const streamOptions = {
    seek: 0,
    volume: 100
}
const opts = {
    maxResults: 25,
    key: config.YOUTUBE_API,
    type: 'video'
};
const prefix = '?'
const musicQueueAdd = require("./QueueCommand.js")
//const PlayCommand = new PlayASongCommand;

//var musicQueue = [];
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
async run(msg) {
    const user = msg.member.user.tag
      if (talkedRecently.has(msg.author.id)) {
        return msg.channel.send("Cooldown! Wait 45 seconds before this command again. - " + user);
        
} else {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    
    const user = msg.member.user.tag
    const dated = new Date().toLocaleString();
    

    //console.log(videos)
    //msg.channel.send('https://www.youtube.com/results?search_query=' + query)
 
    //const choice = args[0];
    //const voiceChannel = msg.member.voice.channel;



    if (msg.member.voice.channel){
        const connection = await msg.member.voice.channel.join();
        let embed = new Discord.MessageEmbed()
                .setColor("#73ffdc")
                .setDescription("Please enter a search query. Remember to narrow down your search.")
                .setTitle("YouTube Search API");
            let embedMsg = await msg.channel.send(embed);
            msg.channel.send(embedMsg)
            let filter = m => m.author.id === msg.author.id;
            let query = await msg.channel.awaitMessages(filter, { max: 1 });
            let results = await search(query.first().content, opts).catch(err => console.log(err));
            if(results) {
                let youtubeResults = results.results;
                let i  =0;
                let titles = youtubeResults.map(result => {
                    i++;
                    return i + ") " + result.title;
                });
                //console.log(titles);
                msg.channel.send({
                    embed: {
                        title: 'Select which song you want by typing the number',
                        description: titles.join("\n")
                    }
                }).catch(err => console.log(err));
                
                let filter = m => (m.author.id === msg.author.id)// && m.content >= 1 && m.content <= youtubeResults.length;
                let collected = await msg.channel.createMessageCollector(filter, {time: 15000});
                
                collected.on('collect', m => {
                    let selected = youtubeResults[m.content -1];
    
                    const nembed = new Discord.MessageEmbed()
                        .setTitle(`Now playing: ${selected.title}`)
                        .setAuthor(`${msg.author.username}`, `${msg.author.displayAvatarURL()}`)
                        .setURL(`${selected.link}`)
                        .setDescription(`${selected.description}`)
                        .setThumbnail(`${selected.thumbnails.default.url}`)
                    msg.channel.send(nembed)
               
                
               
                //const stream = ytdl(song, {filter: 'audioonly'});
                console.log(musicQueue)
                let song = selected.link.toString()
                //musicQueue.push(selected.link)
                console.log(musicQueue)
                console.log(song)
                console.log(musicQueue)
                musicQueueAdd(selected.link)
            })
                //console.log(nembed)
            }
        
    }else{
        msg.reply(`You need to be in a voice channel!`)
    }
    /*if (choice === 'skip') return musicQueue.shift();
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
    var songUrl = song.url;
    
          
            musicQueue.push(songUrl);
            console.log( user + ' | ' + dated + ' | ' + song.title + ' | ' + musicQueue); 
        
            if (msg.channel.type === 'dm') return;
            if (!voiceChannel) {
            return msg.reply('please join a voice channel first!');
        }
        if (voiceChannel.connection){ return console.log('this works!!')}
        else{
            const embed = new Discord.MessageEmbed()
                .setTitle(song.title)
                .setURL(songUrl)
                .setThumbnail(song.image)
                .setFooter("Yoinkbot collects your username and tag to improve our services. To find out whats being collected contact the bot owner with the command '?owner'")
            msg.channel.send(embed)
            voiceChannel.join().then(connection => {
            const stream = ytdl(musicQueue.toString(), { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
                //dispatcher.setVolume(0.40);
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
}