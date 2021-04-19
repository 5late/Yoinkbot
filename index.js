const commando = require('discord.js-commando');
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
    ['image_manipulation','Manipulate images!!']
]).registerDefaults()
.registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('\n')
	console.log(`Servers ${client.user.tag} is in:`)
	console.log('\n')
	console.log(client.guilds.cache.map(v=>v.name).join('\n'));
});

client.on('message', async message => {

if(message.author.id === config.ownerId && message.content.startsWith('!status')){
	message.channel.send('Yoinkbot functional. All systems running as usual. Use ?help for information.')
}

if (message.content === '!updates') {
	message.reply('https://github.com/5late/Yoinkbot').then(message.react('🏘️'))
}

var deletedMessages = [];
client.on('messageDelete', async message => {

client.user.setPresence({
	status: 'online',
	activity: {
		name: 'your mom',
		type: 'LISTENING'
	}
})

if (!message.guild) return;
const fetchedLogs = await message.guild.fetchAuditLogs({
	limit: 1,
	type: 'MESSAGE_DELETE',
});

const deletionLog = fetchedLogs.entries.first();


if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

const { executor, target } = deletionLog;

if (target.id === message.author.id) {
	console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	deletedMessages.push(`A message by ${message.author.tag} was deleted by ${executor.tag}.`)
}	else {
	console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
}
});

client.login(config.token);
})