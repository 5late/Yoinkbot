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
            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const ruser = msg.mentions.users.first() || msg.author;
            
            if(!args.length){
               let ruser = msg.author;
               let rMember = msg.author;
               let micon = ruser.displayAvatarURL({dynamic: true}) // Gets their Avatar
               let joinDate = ruser.createdAt;
               //let roled = rMember.roles.cache.size - 1
               let userid = rMember.id
               let member = msg.guild.member(msg.author);
               let randomColor = '#'+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0');
               let nickname = member.displayName;
               console.log(randomColor)
               
            
              if(!rMember) 
                return msg.reply("Who that user? I dunno him.") // if there is no user mentioned, or provided, it will say this
          
                let memberembed = new Discord.MessageEmbed()
                .setTitle("__**Member Information**__")
                .setColor(randomColor)
                .setThumbnail(micon) // Their icon
                .addField("Name", `${rMember}`) // Their name, I use a different way, this should work
                //.addField("Joined Discord at", `${rMember.user.createdAt}`)
                .addField("ID", rMember.id) // Their ID
                .addField("Joined this server at", `${msg.member.joinedAt}`) // When they joined
                .addFields({name:"Nickname", value: nickname})
                .addField('Status', msg.author.presence.status)
                .addField("If you want more information use the command '?d-info @user'",' ^')
          
                await msg.channel.send(memberembed)
            }
            else{
            
            const name = msg.member.user.tag;
            let rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0])) // Takes the user mentioned, or the ID of a user
            let micon = ruser.displayAvatarURL({dynamic: true}) // Gets their Avatar
            let joinDate = rMember.createdAt;
            let roled = rMember.roles.cache.size - 1
            let userid = rMember.id
            let member = msg.guild.member(ruser);
            let status = member.presence.activity;
            let randomColor = '#'+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0');
            console.log(randomColor)
            let nickname = member.displayName
            
              if(!rMember) 
                return msg.reply("Who that user? I dunno him.") // if there is no user mentioned, or provided, it will say this
          
                let memberembed = new Discord.MessageEmbed()
                .setTitle("__**Member Information**__")
                .setColor(randomColor)
                .setThumbnail(micon) // Their icon
                .addField("Name", `${rMember}`) // Their name, I use a different way, this should work
                .addField("Joined Discord at", `${rMember.user.createdAt}`)
                .addField("ID", userid) // Their ID
                .addField("Joined this server at", `${rMember.joinedAt}`) // When they joined
                .addFields({name:"Role Count",value: roled })
                .addFields({name:"Nickname",value: nickname})
                .addFields({name: 'Status',value: rMember.presence.status})
                //.addFields({name: "Game/Custom ",value: status})
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
         console.log((datata.length / 30))
        }
      });
}
}
}