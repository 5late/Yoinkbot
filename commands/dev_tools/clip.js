const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const { finished } = require('stream');
const prefix  = '?'
module.exports = class ClipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'clip',
            group: 'misc',
            memberName: 'clip',
            description: 'Clip something',
        })
    }
    async run (msg, { text }, member) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      var filename = [];
      function generateOutputFile(channel, member) {
        // use IDs instead of username cause some people have stupid emojis in their name
        const fileName = `./recordings/${channel.id}-${member.id}-${Date.now()}.pcm`;
        filename.push(fileName)
        return fs.createWriteStream(fileName);
      }

      if(!msg.member.guild.me.hasPermission('MANAGE_GUILD')) {
          msg.channel.send('Sorry, you do not have permission to use this command.')
      }else{

        const voiceChannel = await msg.member.voice.channel
        voiceChannel.join().then(connection => {
          msg.reply('ready!');
          const user = msg.author;
              msg.channel.send(`I'm listening to ${user}`);
              // this creates a 16-bit signed PCM, stereo 48KHz PCM stream.
              const audioStream = connection.receiver.createStream(user, {mode: 'pcm'});
              // create an output stream so we can dump our data in a file
              const outputStream = generateOutputFile(voiceChannel, user);
              // pipe our audio data into the file stream
              audioStream.pipe(outputStream);
              outputStream.on("data", console.log);
              // when the stream ends (the user stopped talking) tell the user
              audioStream.on('end', () => {
                msg.channel.send(`I'm no longer listening to ${user}`);
              });
        })
        console.log(filename.toString())
       const attachment = new Discord.MessageAttachment(`./${filename.toString()}`)
        msg.channel.send(`test`,attachment)
      
        const id = msg.author.id
        console.log(id)
        const name = msg.member.user.tag;
        console.log(name)
        var information = [];
        information.push(name, id)
        var savedinfo = fs.readFileSync("./information.txt", {"encoding": "utf-8"});
        
      var newinfo = savedinfo;
    fs.writeFileSync("information.txt", newinfo.toString())
    
    fs.appendFileSync("information.txt", information.toString())

    fs.readFile("./information.txt", function (err, data) {
        if (err) throw err;
        var datata = data.toString('utf-8')
        if(data.includes('Xurxx#7879')){
         console.log((datata.length / 29) - .689655172413794)
        }
      });
    }
}
}