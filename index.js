const commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json'))
const client = new commando.CommandoClient({
	owner: config.ownerId,
    commandPrefix: config.prefix,
    unknownCommandResponse: false
});


client.login(config.token);
client.registry.registerGroups([
	['mod', 'mod commands'],
	['misc', 'misc commands'],
	['music', 'music bot commands'],
	['dev_tools', 'developer tools'],
	['reddit', 'reddit commands'],
	['csgo', 'CSGO Case commands'],
	['apis', 'API-related commands'],
    ['tictactoe', 'Tic Tac Toe Commands - Broken'],
    ['image_manipulation','Manipulate images!!']
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



});

client.login(config.token);