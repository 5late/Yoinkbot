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


if(message.content === 'testing'){
	await client.channels.cache.find(x => x.id === '803456129073807421').send('test')
}
})

var deletedMessages = [];
client.on('messageDelete', async message => {

client.user.setPresence({
	status: 'online',
	activity: {
		name: 'your mom',
		type: 'LISTENING',
		//url: 'https://www.twitch.tv/xurxxist'
	}
})

if (!message.guild) return;
const fetchedLogs = await message.guild.fetchAuditLogs({
	limit: 1,
	type: 'MESSAGE_DELETE',
});
// Since we only have 1 audit log entry in this collection, we can simply grab the first one
const deletionLog = fetchedLogs.entries.first();

// Let's perform a coherence check here and make sure we got *something*
if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

// We now grab the user object of the person who deleted the message
// Let us also grab the target of this action to double check things
const { executor, target } = deletionLog;


// And now we can update our output with a bit more information
// We will also run a check to make sure the log we got was for the same author's message

if (target.id === message.author.id) {
	console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	deletedMessages.push(`A message by ${message.author.tag} was deleted by ${executor.tag}.`)
}	else {
	console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
}
});


client.login(config.token);