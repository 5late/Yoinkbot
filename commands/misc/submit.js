const commando = require('discord.js-commando');
const client = new commando.CommandoClient()
const Discord = require('discord.js')
const fs = require('fs')
const axios = require('axios')
const prefix = '?'
const request = require('request')

module.exports = class SubmitCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'submit',
            group: 'misc',
            memberName: 'submit',
            description: 'Submit a meme to the Yoinkbot meme pool! No NSFW - (bannable offense)',
        })
    }
    
    async run (msg) {
        const bannedMembers = [];
        if(bannedMembers.indexOf(msg.author.id)>-1)return console.log(`${msg.author.username} tried to use this command, but is banned.`)
        var tag = [];
        const dated = new Date().toLocaleDateString();
        console.log(dated)
        const datee = Date.now()
        function downloadF(url){
            request.get(url)
                .on('error', console.error)
                .pipe(fs.createWriteStream(`./submissions/funny/${msg.author.id}-${tag.toString()}-${datee}.png`));
                const customer = {
                    name: msg.author.username,
                    id: msg.author.id,
                    date:dated,
                }
                const jsonString = JSON.stringify(customer)
                fs.writeFile(`./jsonfiles/${msg.author.id}-${tag.toString()}-${datee}.png.json`, jsonString, err => {
                    if (err) {
                        console.log('Error writing file', err)
                    } else {
                        console.log('Successfully wrote file')
                    }
                })
        }
        function downloadT(url){
            request.get(url)
                .on('error', console.error)
                .pipe(fs.createWriteStream(`./submissions/trump/${msg.author.id}-${tag.toString()}-${datee}.png`));
                const customer = {
                    name: msg.author.username,
                    id: msg.author.id,
                    date:dated,
                }
                const jsonString = JSON.stringify(customer)
                fs.writeFile(`./jsonfiles/${msg.author.id}-${tag.toString()}-${datee}.png.json`, jsonString, err => {
                    if (err) {
                        console.log('Error writing file', err)
                    } else {
                        console.log('Successfully wrote file')
                    }
                })
        }
        function downloadM(url){
            request.get(url)
                .on('error', console.error)
                .pipe(fs.createWriteStream(`./submissions/meta/${msg.author.id}-${tag.toString()}-${datee}.png`));
                const customer = {
                    name: msg.author.username,
                    id: msg.author.id,
                    date:dated,
                }
                const jsonString = JSON.stringify(customer)
                fs.writeFile(`./jsonfiles/${msg.author.id}-${tag.toString()}-${datee}.png.json`, jsonString, err => {
                    if (err) {
                        console.log('Error writing file', err)
                    } else {
                        console.log('Successfully wrote file')
                    }
                })
        }
        function downloadB(url){
            request.get(url)
                .on('error', console.error)
                .pipe(fs.createWriteStream(`./submissions/boomer/${msg.author.id}-${tag.toString()}-${datee}.png`));
                const customer = {
                    name: msg.author.username,
                    id: msg.author.id,
                    date:dated,
                }
                const jsonString = JSON.stringify(customer)
                fs.writeFile(`./jsonfiles/${msg.author.id}-${tag.toString()}-${datee}.png.json`, jsonString, err => {
                    if (err) {
                        console.log('Error writing file', err)
                    } else {
                        console.log('Successfully wrote file')
                    }
                })
        }
        function downloadG(url){
            request.get(url)
                .on('error', console.error)
                .pipe(fs.createWriteStream(`./submissions/gif/${msg.author.id}-${tag.toString()}-${datee}.gif`));
                const customer = {
                    name: msg.author.username,
                    id: msg.author.id,
                    date:dated,
                }
                const jsonString = JSON.stringify(customer)
                fs.writeFile(`./jsonfiles/${msg.author.id}-${tag.toString()}-${datee}.gif.json`, jsonString, err => {
                    if (err) {
                        console.log('Error writing file', err)
                    } else {
                        console.log('Successfully wrote file')
                    }
                })
        }
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        //const igUsername = args[0].toLowerCase();
        
       
        let Attachment = (msg.attachments).array();
        console.log(Attachment[0].url)

        msg.channel.send('Please assign a tag to your meme. Tags are ``funny``,``trump``,``meta``,``boomer``, ``gif`` (must be lowercase)')
        const filter = m => m.author.id === msg.author.id

      const collector = msg.channel.createMessageCollector(filter, {time:15000})

        collector.on(`collect`, m => {
            if(m.content === 'funny'){
                tag.push(`funny`)
                downloadF(Attachment[0].url)
            }
            if(m.content === 'trump'){
                tag.push(`trump`)
                downloadT(Attachment[0].url)
            }
            if(m.content === 'meta'){
                tag.push(`meta`)
                downloadM(Attachment[0].url)
            }
            if(m.content === 'boomer'){
                tag.push(`boomer`)
                downloadB(Attachment[0].url)
            }
            if(m.content === 'gif'){
                tag.push(`gif`)
                downloadG(Attachment[0].url)
            }
            msg.channel.send(`Thank you for submitting your meme to the general Yoinkbot meme pool.`)
            
        })



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