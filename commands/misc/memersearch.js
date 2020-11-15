const commando = require('discord.js-commando');
const client = new commando.CommandoClient()
const Discord = require('discord.js')
const fs = require('fs')
const axios = require('axios')
const prefix = '?'
const request = require('request')

module.exports = class JokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'memer',
            group: 'misc',
            memberName: 'memer',
            description: 'Search for a memer!',
        })
    }
    
    async run (msg) {

        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const rMember = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]))

console.log(args)
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}
var memerMemes = [];
fs.readdirSync('./submissions/funny').forEach(file => {
    const path = './submissions/funny'
    if(file.indexOf(`${rMember.id}`)> -1){
        memerMemes.push(`${path}/${file}`)
    }

  });
  fs.readdirSync('./submissions/boomer').forEach(file => {
      const path = './submissions/boomer'
    if(file.indexOf(`${rMember.id}`)> -1){
        memerMemes.push(`${path}/${file}`)
    }

  });
  fs.readdirSync('./submissions/trump').forEach(file => {
      const path = './submissions/trump'
    if(file.indexOf(`${rMember.id}`)> -1){
        memerMemes.push(`${path}/${file}`)
    }

  });
  fs.readdirSync('./submissions/meta').forEach(file => {
      const path = './submissions/meta'
    if(file.indexOf(`${rMember.id}`)> -1){
        memerMemes.push(`${path}/${file}`)
    }

  });
  fs.readdirSync('./submissions/gif').forEach(file => {
    const path = './submissions/gif'
  if(file.indexOf(`${rMember.id}`) >=0){
      memerMemes.push(`${path}/${file}`)
  }
});
console.log(memerMemes)
const memerMeme = memerMemes[Math.floor(Math.random() * memerMemes.length)]
console.log(memerMeme)


if(memerMeme.indexOf(`funny`)){
    var JsonMemer = memerMeme.substr(20,100)
jsonReader(`./jsonfiles/${JsonMemer}.json`, (err, customer)=> {
    if (err) {
        console.log(err)
        return
    }
    const attachment = new Discord.MessageAttachment(memerMeme.toString(),`memer.png`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Random Meme from: `+rMember.user.username,rMember.user.displayAvatarURL())
    .addField(`Submitted:`, customer.date)
    .attachFiles(attachment)
    .setImage(`attachment://memer.png`)
    .setFooter(`Yoinkbot Meme Pool`)
    msg.channel.send(embed)
})   
}


else if(memerMeme.indexOf(`boomer`)){
    var JsonMemer = memerMeme.substr(20,100)
jsonReader(`./jsonfiles/${JsonMemer}.json`, (err, customer)=> {
    if (err) {
        console.log(err)
        return
    }
    const attachment = new Discord.MessageAttachment(memerMeme.toString(),`memer.png`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Random Meme from: `+rMember.user.username,rMember.user.displayAvatarURL())
    .setURL(attachment)
    .addField(`Submitted:`, customer.date)
    .attachFiles(attachment)
    .setImage(`attachment://memer.png`)
    .setFooter(`Yoinkbot Meme Pool`)
    msg.channel.send(embed)
})   
}


else if(memerMeme.indexOf(`trump`)){
    var JsonMemer = memerMeme.substr(19,100)
jsonReader(`./jsonfiles/${JsonMemer}.json`, (err, customer)=> {
    if (err) {
        console.log(err)
        return
    }
    const attachment = new Discord.MessageAttachment(memerMeme.toString(),`memer.png`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Random Meme from: `+rMember.user.username,rMember.user.displayAvatarURL())
    .addField(`Submitted:`, customer.date)
    .attachFiles(attachment)
    .setImage(`attachment://memer.png`)
    .setFooter(`Yoinkbot Meme Pool`)
    msg.channel.send(embed)
})   
}


else if(memerMeme.indexOf(`meta`)){
    var JsonMemer = memerMeme.substr(18,100)
jsonReader(`./jsonfiles/${JsonMemer}.json`, (err, customer)=> {
    if (err) {
        console.log(err)
        return
    }
    const attachment = new Discord.MessageAttachment(memerMeme.toString(),`memer.png`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Random Meme from: `+rMember.user.username,rMember.user.displayAvatarURL())
    .addField(`Submitted:`, customer.date)
    .attachFiles(attachment)
    .setImage(`attachment://memer.png`)
    .setFooter(`Yoinkbot Meme Pool`)
    msg.channel.send(embed)
})   

console.log(`this works 1`)
}
if(memerMeme.indexOf(`gif`)){
    console.log(memerMeme)
    var JsonMemer = memerMeme.substr()
jsonReader(`./jsonfiles/${JsonMemer}.json`, (err, customer)=> {
    if (err) {
        console.log(err)
        return
    }
    const attachment = new Discord.MessageAttachment(memerMeme.toString(),`memer.gif`)
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Random Meme from: `+rMember.user.username,rMember.user.displayAvatarURL())
    .addField(`Submitted:`, customer.date)
    .attachFiles(attachment)
    .setImage(`attachment://memer.gif`)
    .setFooter(`Yoinkbot Meme Pool`)
    msg.channel.send(embed)
})   
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
