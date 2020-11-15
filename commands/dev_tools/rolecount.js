const commando = require('discord.js-commando');
const prefix = '?'
const fs = require('fs')
const Discord = require('discord.js')

module.exports = class RoleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'd-roles',
            group: 'dev_tools',
            memberName: 'd-roles',
            description: 'Find roles.',
        })
    }

//rolesid = [];
    async run (msg) {

    let roleName = msg.content.split(" ").slice(1).join(" ");

    let membersWithRole = msg.guild.members.cache.filter(member => { 
        return member.roles.cache.find(guild => guild.name === roleName);
    }).map(member => {
        return `<@${member.user.id}>`;
    })

    let embed = new Discord.MessageEmbed()
        .setTitle(`Users with the ${roleName} role`)
        .setDescription(membersWithRole.join("\n"))
        .setColor('0xFFFF')
    return msg.channel.send(embed);
    
    
    switch (choice){
        case 'Admin':{
            msg.channel.send('There are ', `${membersWithRole.size}`, ' with the role Admin')
        }
    default:
        msg.channel.send('Please enter a role name')
    }




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