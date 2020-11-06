const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class PasswordCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'passwordprivacy',
            group: 'misc',
            memberName: 'passwordprivacy',
            description: 'Read how we keep your randomly generated password safe.',
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      const embed = new Discord.MessageEmbed()
      .setTitle(`How do we keep your password safe?`)
      .setDescription(`Keeping your password safe is our top concern. To keep your randomly generated password safe, we take the following precautions.`)
      .addField(`One`, `We DM you your password. This makes sure no body else can see your password.`)
      .addField(`Two`, `Your password is **NEVER** saved or logged in our backend services. We do not log or save any of the passwords that we generate.`)
      .addField(`Three`, `Getting the same password twice is nearly impossible. Your password is made up of 16 characters ranging from uppercase, lowercase and numbers. According to this chart, it would take 6tn years for a computer to brute force your password`)
      .setImage(`https://qph.fs.quoracdn.net/main-qimg-e977ecac3bbe0b8a7535b1fe19e8c428`)
      .setFooter(`Xurxx#7879 | Creator of YB`)
        msg.channel.send(embed)
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