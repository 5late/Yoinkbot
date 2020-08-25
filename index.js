const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'))
const client = new commando.CommandoClient({
	owner: config.ownerId,
	commandPrefix: config.prefix
});


client.login(config.token);
client.registry.registerGroups([
	['mod', 'mod commands'],
	['misc', 'misc commands'],
	['music', 'music bot commands']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'));


	
client.once('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 console.log(client);
 });

 client.on('guildCreate', guild => 'message', message => {

	console.log('yeet')
	//let SendChannel = guild.channels.cache.get("725391775157714955") || guild.channels.cache.get("chat");
	let SendChannel = guild.channels.cache.first(message.channel.send('Hello'));
	console.log(SendChannel);
	//if(SendChannel) SendChannel.send('Hello');
	
});

 client.on('message', message => {

	client.user.setPresence({
		status: 'online',
		activity: {
			name: 'your mom',
			type: 'LISTENING',
			//url: 'https://www.twitch.tv/xurxxist'
		}
	})
 if (message.content === 'yeetus') {
 	message.channel.send('deletus').then(message.react('725380774265749637'));
 
 }
 
 if (message.content === 'Yeetus') {
 message.reply('Deletus');
 }

 if (message.content === 'Yoinkbot pls alive') {
  message.reply('Alive');
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

  if (message.content === 'bruh') {
 
	message.delete();

 if (message.content === 'Crab Rave') {
 
 	message.react(':crab:')
	 }
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
