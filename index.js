const commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const cooldowns = new Discord.Collection();
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
const Enmap = require("enmap");
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
client.points = new Enmap({name: "points"});


client.login(config.token);
client.registry.registerGroups([
	['mod', 'mod commands'],
	['misc', 'misc commands'],
	['music', 'music bot commands'],
	['dev_tools', 'developer tools'],
	['reddit', 'reddit commands'],
	['csgo', 'CSGO Case commands'],
	['apis', 'API-related commands'],
	['tictactoe', 'Tic Tac Toe Commands - Broken']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('\n')
	console.log(`Servers ${client.user.tag} is in:`)
	console.log('\n')
	//const guilds = message.guild
	console.log(client.guilds.cache.map(v=>v.name).join('\n'));
	//console.log(client);
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

//console.log(config.ownerId)
if(message.author.id === config.ownerId && message.content.startsWith('!status')){
	message.channel.send('Yoinkbot functional. All systems running as usual. Use ?help for information.')
}

if (message.content === 'oscarEmoji'){
	message.react('767051918198964274')
}
if (message.content === 'updates') {
	message.reply('https://github.com/5late/Yoinkbot').then(message.react('🏘️'))
}

 /*if(message.author.bot) return;

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
            let collected = await message.channel.createMessageCollector(filter, { maxMatches: 1 });
            let selected = youtubeResults[collected.first().content - 1];

            embed = new Discord.MessageEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);
				console.log(embed)
            message.channel.send(embedMsg);
        }
    }*/


/*if (message.content.includes('penis')){
		let channel = message.channel;
        let lm = channel.lastMessage;
        let msgText = lm.content;
        message.channel.send('uwu'+msgText)
}*/

if (message.content.includes('hyunjin')){
	message.channel.send('https://media.discordapp.net/attachments/761409251348185088/764990352192045126/Screenshot_20201009-205616_Gallery.jpg?width=819&height=666')
}
        
if (message.content === 'nitropls') {
	message.channel.send('https://cdn.discordapp.com/attachments/760962536694218762/762778433478066176/image0.png')
}
 if (message.content === 'yeetus') {
 	message.channel.send('deletus').then(message.react('725380774265749637'));

 }

 if(message.content === 'change nick'){
	message.member.setNickname(message.content.replace('changeNick ', 'Penis'));
 }

 if (message.author.id === '567139094816096266'){
	message.react('🇫').then(
		message.react('🇺').then(
			message.react('🇷').then(
				message.react('769390295359422474').then(
					message.react('🇾')
				)
			)
		)
	)
 }

  if (message.content === 'Yeetus') {
 message.reply('Deletus');
 }

 if (message.content === 'changeNick'){
	 message.channel.send('Hello')
 }
 //if (message.mentions.members.first()){
	// message.channel.send('hello')
 //}

 if(message.content === 'activity'){
	message.channel.send(`${client.guilds.cache.size} servers have ${client.users.cache.size} members`+` | ?help `, { type: 'WATCHING' })
   }

 if (message.content === 'Yoinkbot pls alive') {
  	message.reply('Alive');
  }

if (message.content === 'test'){
	
	message.channel.send('Hello, <:cri:754491950396342354>');
}

if(message.content === 'servers'){
	const guilds = message.guild
	console.log(client.guilds.cache.map(v=>v.name).join('\n'));
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

/*if (message.content === 'oscar') {
	message.channel.send('https://cdn.discordapp.com/attachments/754084714545152106/760191372920750150/SmartSelect_20200928-132839_Instagram.gif')
}*/

if (message.content === 'liam'){
	message.channel.send({files: ["./liam.mp4"]})
}

if (message.content === 'emsus') {
	message.channel.send({files: ["./emsus.mp4"]})
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
if (!message.guild || message.author.bot) return;

  /* Now we start the real code for this tutorial */

  // If this is not in a DM, execute the points code.
  if (message.guild) {
    // We'll use the key often enough that simplifying it is worth the trouble.
    const key = `${message.guild.id}-${message.author.id}`;
    
    // Triggers on new users we haven't seen before.
    client.points.ensure(key, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1,
      lastSeen: new Date()
    });
    
    // Increment the points and save them.
    client.points.inc(key, "points");
    
    // Calculate the user's current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));

    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      client.points.set(key, curLevel, "level");
    }
  }
  
  /* END POINTS ATTRIBUTION. Now let's have some fun with commands. */

  // As usual, we stop processing if the message does not start with our prefix.
  if (message.content.indexOf(config.prefix) !== 0) return;

  // Also we use the config prefix to get our arguments and command:
  const args = message.content.split(/\s+/g);
  const command = args.shift().slice(config.prefix.length).toLowerCase();
  
  // Let's build some useful ones for our points system.

  if (message.content.startsWith(prefix+'points')) {
    const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
  }

  if(message.content.startsWith(prefix+"leaderboard")) {
    // Get a filtered list (for this guild only), and convert to an array while we're at it.
    const filtered = client.points.array().filter( p => p.guild === message.guild.id );
  
    // Sort it to get the top results... well... at the top. Y'know.
    const sorted = filtered.sort((a, b) => a.points < b.points);
  
    // Slice it, dice it, get the top 10 of it!
    const top10 = sorted.splice(0, 10);
  
    // Now shake it and show it! (as a nice embed, too!)
    const embed = new Discord.MessageEmbed()
      .setTitle("Leaderboard")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription("Our top 10 points leaders!")
      .setColor(0x00AE86);
    for(const data of top10) {
      embed.addField(client.users.cache.get(data.user).tag, `${data.points} points (level ${data.level})`);
    }
    return message.channel.send({embed});
  }

  /*if(message.content.startsWith(prefix+"give")) {
    // Limited to guild owner - adjust to your own preference!
    if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");

    const user = message.mentions.users.first() || client.users.cache.get(args[0]);
	if(!user) return message.reply("You must mention someone or give their ID!");
	
	if (user === message.author){
		return message.reply('You cant give points to yourself!!')
	}


    const pointsToAdd = parseInt(args[1], 10);
    if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...");
	
	if (pointsToAdd > client.points){
		return message.reply('You cannot do that')
	}
    const key = `${message.guild.id}-${user.id}`;

    // Ensure there is a points entry for this user.
    client.points.ensure(key, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1,
      lastSeen: new Date()
    });
    
    // Add the points to the enmap for this user.
    client.points.math(key, "+", pointsToAdd, "points");

    message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${client.points.get(key, "points")} points.`);
  }
*/
  if(message.content.startsWith(prefix+"cleanup")) {
    // Let's clean up the database of all "old" users, and those who haven't been around for... say a month.

    // Get a filtered list (for this guild only).
    const filtered = client.points.filter( p => p.guild === message.guild.id );

    // We then filter it again (ok we could just do this one, but for clarity's sake...)
    // So we get only users that haven't been online for a month, or are no longer in the guild.
    const rightNow = new Date();
    const toRemove = filtered.filter(data => {
      return !message.guild.members.cache.has(data.user)// || rightNow - 1 > data.lastSeen;
    });

    toRemove.forEach(data => {
      client.points.delete(`${message.guild.id}-${data.user}`);
    });

    message.channel.send(`I've cleaned up ${toRemove.size} old farts.`);
  }
});

client.login(config.token);
