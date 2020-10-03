const commando = require('discord.js-commando');
const fs = require('fs')
const client = new commando.CommandoClient;
const Discord = require('discord.js')
const prefix = '?'

module.exports = class InfoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd-info',
            group: 'dev_tools',
            memberName: 'd-info',
            description: 'Gives info about a user.',
        })
    }
    async run (msg) {

        //if (msg.split(" ")[0] === prefix + "userinfo") {
            //ex `member @Rinkky
            const ruser = msg.mentions.users.first() || msg.author;
            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            //let args = msg.split(" ").slice(1) // gets rid of the command
            const name = msg.member.user.tag;
            let rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0])) // Takes the user mentioned, or the ID of a user
            let micon = ruser.avatarURL // Gets their Avatar
            let joinDate = rMember.createdAt;
            
              if(!rMember) 
                return msg.reply("Who that user? I dunno him.") // if there is no user mentioned, or provided, it will say this
          
                let memberembed = new Discord.MessageEmbed()
                .setDescription("__**Member Information**__")
                .setColor(0x15f153)
                .setThumbnail(micon) // Their icon
                .addField("Name", `${rMember}`) // Their name, I use a different way, this should work
                .addField("Joined Discord at", `${rMember.user.createdAt}`)
                .addField("ID", rMember.id) // Their ID
                .addField("Joined this server at", `${rMember.joinedAt}`) // When they joined
          
                await msg.channel.send(memberembed)
          
    
    
    
    
    
    
    
    const id = msg.author.id
    console.log(id)
    
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