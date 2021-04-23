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
            name: 'random',
            group: 'misc',
            memberName: 'random',
            description: 'Send a random meme',
        })
    }
    
    async run (msg) {

        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

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

        if(args.toString() === 'funny'){
            const path = './submissions/funny'
            var file = fs.readdirSync(path)
            var ranfile = file[Math.floor(Math.random() * file.length)];
            jsonReader(`./jsonfiles/${ranfile}.json`, (err, customer) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(customer.name, customer.id, customer.date) // => "Infinity Loop Drive"
                const attachment = new Discord.MessageAttachment(`./submissions/funny/${ranfile}`, `meme.png`)
                const embed = new Discord.MessageEmbed()
                .setTitle(`${args[0]} meme`)
                .setAuthor(`${msg.author.username}`, msg.author.displayAvatarURL())
                .attachFiles(attachment)
                .setImage(`attachment://meme.png`)
                .addField(`Author:`, customer.name,true)
                .addField(`Author ID:`, customer.id, true)
                .addField(`Submitted: `, customer.date)
                .addField(`Tag:`,`funny`)

                msg.channel.send(embed)
            })
        }
        if(args.toString() === 'trump'){
            const path = './submissions/trump'
            
            var file = fs.readdirSync(path)
            var ranfile = file[Math.floor(Math.random() * file.length)];
            jsonReader(`./jsonfiles/${ranfile}.json`, (err, customer) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(customer.name, customer.id, customer.date) // => "Infinity Loop Drive"
                const attachment = new Discord.MessageAttachment(`./submissions/trump/${ranfile}`, `meme.png`)
                const embed = new Discord.MessageEmbed()
                .setTitle(`${args[0]} meme`)
                .setAuthor(`${msg.author.username}`, msg.author.displayAvatarURL())
                .attachFiles(attachment)
                .setImage(`attachment://meme.png`)
                .addField(`Author:`, customer.name,true)
                .addField(`Author ID:`, customer.id, true)
                .addField(`Submitted: `, customer.date)
                .addField(`Tag:`,`trump`)

                msg.channel.send(embed)
            })
        }
        if(args.toString() === 'meta'){
            const path = './submissions/meta'
            
            var file = fs.readdirSync(path)
            var ranfile = file[Math.floor(Math.random() * file.length)];
            jsonReader(`./jsonfiles/${ranfile}.json`, (err, customer) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(customer.name, customer.id, customer.date) // => "Infinity Loop Drive"
                const attachment = new Discord.MessageAttachment(`./submissions/meta/${ranfile}`, `meme.png`)
                const embed = new Discord.MessageEmbed()
                .setTitle(`${args[0]} meme`)
                .setAuthor(`${msg.author.username}`, msg.author.displayAvatarURL())
                .attachFiles(attachment)
                .setImage(`attachment://meme.png`)
                .addField(`Author:`, customer.name,true)
                .addField(`Author ID:`, customer.id, true)
                .addField(`Submitted: `, customer.date,)
                .addField(`Tag:`,`meta`)

                msg.channel.send(embed)
            })
        }
        if(args.toString() === 'boomer'){
            const path = './submissions/boomer'
            
            var file = fs.readdirSync(path)
            var ranfile = file[Math.floor(Math.random() * file.length)];
            console.log(ranfile)
            jsonReader(`./jsonfiles/${ranfile}.json`, (err, customer) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(customer.name, customer.id, customer.date) // => "Infinity Loop Drive"
                const attachment = new Discord.MessageAttachment(`${path}/${ranfile}`, `meme.png`)
                const embed = new Discord.MessageEmbed()
                .setTitle(`${args[0]} meme`)
                .setAuthor(`${msg.author.username}`, msg.author.displayAvatarURL())
                .attachFiles(attachment)
                .setImage(`attachment://meme.png`)
                .addField(`Author:`, customer.name,true)
                .addField(`Author ID:`, customer.id,true)
                .addField(`Submitted: `, customer.date,true)
                .addField(`Tag:`,`boomer`,true)
                .setFooter(`Yoinkbot Meme Pool`)
                msg.channel.send(embed)
            })
        }
        if(args.toString() === 'gif'){
            const path = './submissions/gif'
            
            var file = fs.readdirSync(path)
            var ranfile = file[Math.floor(Math.random() * file.length)];
            console.log(ranfile)
            jsonReader(`./jsonfiles/${ranfile}.json`, (err, customer) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(customer.name, customer.id, customer.date) // => "Infinity Loop Drive"
                const attachment = new Discord.MessageAttachment(`${path}/${ranfile}`, `meme.gif`)
                const embed = new Discord.MessageEmbed()
                .setTitle(`${args[0]} meme`)
                .setAuthor(`${msg.author.username}`, msg.author.displayAvatarURL())
                .attachFiles(attachment)
                .setImage(`attachment://meme.gif`)
                .addField(`Author:`, customer.name,true)
                .addField(`Author ID:`, customer.id,true)
                .addField(`Submitted: `, customer.date,true)
                .addField(`Tag:`,`gif`,true)
                .setFooter(`Yoinkbot Meme Pool`)
                msg.channel.send(embed)
            })
        }

    }
}
