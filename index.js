const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const queue = new Map();
const prefix = "?";

	
client.once('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 console.log(client);
 });

client.on('message', message => {

 if (message.content === 'yeetus') {
 	message.channel.send('deletus').then(message.react('725380774265749637'));
 
 }
 
 if (message.content === 'Yeetus') {
 message.reply('Deletus');
 }

 if (message.content === 'Yoinkbot pls alive') {
  message.reply('Alive');
  }

 if (message.content === 'Thanks Yoinkbot')
 message.reply('No problem! My creator is Xurxx#7879, you can visit his website at https://5late.github.io')

 if (message.content === 'pog') {
	message.channel.send('cheers ill drink to that').then(message.react('744375336925659217'));
	
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
  
  if (!message.guild) return;

  if (message.content.startsWith('!kick')) {
	
const user = message.mentions.users.first();

    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    } 
 
}
client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

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
    message.channel.send("You need to enter a valid command!");
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 1,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
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

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}
});

<<<<<<< HEAD
client.login('NzI0OTg5MTU4ODkxODQ3NzAw.XvIMxQ.ovfqt-MhFGSdMzHiM56FfksfFsI');
=======
client.login('yourtokenhere');
>>>>>>> d970dea55363011b7b6f024384a2cce66c6eda97
