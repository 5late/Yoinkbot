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

 if (message.content === 'pog') {
	message.channel.send('cheers ill drink to that').then(message.react('725376490836852766'));
	
}

  if (message.content == '@Sweat') {
 
	message.delete();

 if (message.content === 'Crab Rave') {
 
 	message.react('\:crab:')
	 }
	}	 

 if (message.content === 'dance') {
	 message.channel.send({files: ["https://i.imgur.com/O0QUXuj.gif"]} )
	 
}
 } 
 );

client.login('NzI0OTg5MTU4ODkxODQ3NzAw.XvPOXQ.yy_Ha6JsvTjJz2gipfEPZkVouwM');
