const commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const { startsWith } = require('ffmpeg-static');
const config = require(path.join(__dirname, 'config', 'config.json'))
const client = new commando.CommandoClient({
	owner: config.ownerId,
	commandPrefix: config.prefix
});
const search = require('youtube-search');
const opts = {
    maxResults: 25,
    key: config.YOUTUBE_API,
    type: 'video'
};


client.login(config.token);
client.registry.registerGroups([
	['mod', 'mod commands'],
	['misc', 'misc commands'],
	['music', 'music bot commands'],
	['dev_tools', 'developer tools']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
 	console.log(`Logged in as ${client.user.tag}!`);
	console.log(client);
});

client.on('message', async message => {

client.user.setPresence({
	status: 'online',
	activity: {
		name: 'your mom',
		type: 'LISTENING',
		//url: 'https://www.twitch.tv/xurxxist'
	}
})

if (message.content === 'updates') {
	message.reply('https://github.com/5late/Yoinkbot').then(message.react('🏘️'))
}

 if(message.author.bot) return;

    if(message.content.toLowerCase() === '?search') {
        let embed = new Discord.MessageEmbed()
            .setColor("#73ffdc")
            .setDescription("Please enter a search query. Remember to narrow down your search.")
            .setTitle("YouTube Search API");
        let embedMsg = await message.channel.send(embed);
        let filter = m => m.author.id === message.author.id;
        let query = await message.channel.awaitMessages(filter, { max: 1 });
        let results = await search(query.first().content, opts).catch(err => console.log(err));
        if(results) {
            let youtubeResults = results.results;
            let i  =0;
            let titles = youtubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            console.log(titles);
            message.channel.send({
                embed: {
                    title: 'Select which song you want by typing the number',
                    description: titles.join("\n")
                }
            }).catch(err => console.log(err));
            
            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
            let collected = await message.channel.awaitMessages(filter, { maxMatches: 1 });
            let selected = youtubeResults[collected.first().content - 1];

            embed = new Discord.MessageEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);
				console.log(embed)
            message.channel.send(embedMsg);
        }
    }

 if (message.content === 'yeetus') {
 	message.channel.send('deletus').then(message.react('725380774265749637'));
 
 }
 
 if (message.content === 'Yeetus') {
 message.reply('Deletus');
 }
 
 if(message.content === 'activity'){
	message.channel.send(`${client.guilds.cache.size} servers have ${client.users.cache.size} members`+` | !help `, { type: 'WATCHING' })
   }

 if (message.content === 'Yoinkbot pls alive') {
  	message.reply('Alive');
  }

if (message.content === 'test'){
	message.channel.send('Hello, <:cri:754491950396342354>');
}

 if (message.content === 'Thanks Yoinkbot') {
 message.reply('No problem! My creator is Xurxx#7879, you can visit his website at https://5late.github.io')
 }
 
 if (message.content === 'pog') {
	message.channel.send('cheers ill drink to that').then(message.react('725376490836852766'));
	
}

if (message.content === 'this is so sad') {
	message.channel.send('?play https://www.youtube.com/watch?v=whwe0KD_rGw');
	
}

  /*if (message.content === 'bruh') {
 
	message.delete();*/

 if (message.content === 'Crab Rave') {
 
 	message.react(':crab:')
	 }	 

 if (message.content === 'dance') {
	 message.channel.send({files: ["https://i.imgur.com/O0QUXuj.gif"]} )
	 
}

if (message.content === 'fuck you say to me') {
  message.delete();
	message.channel.send({files: ["./ninjarage.mp4"] })
	
}

if (message.content === 'im out') {
  message.reply("You said...");
	message.channel.send({files: ["./Fuck This Shit I'm Out.mp4"] })
	
}

 if (message.content === 'rickroll') {
	 setUsername(yeet);
 }

if(message.content === 'biden') {
	message.channel.send('https://media.tenor.com/images/98bdd808780ab874d270947e1e33e275/tenor.gif')
	message.channel.send('https://media.tenor.com/images/046a1ac7298597402ebb5a80bceb5cb3/tenor.gif')
	message.channel.send('https://media.tenor.com/images/f2fad2139de45a70cf92d8b644c48385/tenor.gif')
}

if(message.content === 'circus'){
	message.channel.send('For your viewing pleasure, please enjoy this video: https://youtu.be/LX7DMncaa1M')
}

  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
  
  //if (!message.guild) return;

 


if (message.content === 'pro life tips')
	message.channel.send ('Nick is gay', {
	tts: true
	}
)

if (message.content === 'oscar') {
	message.channel.send('https://cdn.discordapp.com/attachments/754084714545152106/760191372920750150/SmartSelect_20200928-132839_Instagram.gif')
}

if (message.content === 'liam'){
	message.channel.send({files: ["./liam.mp4"]})
}

if(message.content === 'yawsha') {
	message.channel.send('https://cdn.discordapp.com/attachments/754084714545152106/760546234838024282/SmartSelect_20200929-125857_Gallery.gif')
}

if(message.content === 'nick') {
	message.channel.send({files: ["./nicksus.mp4"]})
	message.channel.send({files: ["./nicksus2.mp4"]})
	message.channel.send('https://cdn.discordapp.com/attachments/756605065393078422/760940998649577542/unknown.png')
}



/*if (!message.author.bot) {
var request = require('request');
	
	request('http://www.google.com', function (error, response, body) {

client.on('message', async message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
	try{ 
	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} else {
		message.channel.send('You need to enter a valid command!')
		if (message.author.bot) return;
	}
	if (message.author.bot) return;
	
}catch(error) {
	console.log(err);
	queue.delete(message.guild.id);
	return message.channel.send(err);
	  }
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voice.channel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.videoDetails.title,
		url: songInfo.videoDetails.video_url,
	};

	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 2,
			playing: true,
		};

		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voice.channel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voice.channel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.play(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
}).setMaxListeners(1);
*/
});

client.login(config.token);
