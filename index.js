const Discord = require('discord.js');
const client = new Discord.Client();

	
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

 if (message.content === 'Thanks Yoinkbot')
 message.reply('No problem! My creator is Xurxx#7879, you can visit his website at https://5late.github.io')

 if (message.content === 'pog') {
	message.channel.send('cheers ill drink to that').then(message.react('725376490836852766'));
	
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
});

client.login('yourtokenhere');
