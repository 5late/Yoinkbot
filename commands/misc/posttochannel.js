const commando = require('discord.js-commando');
const fs = require('fs')
const prefix = '?'
const client = new commando.CommandoClient();

module.exports = class JokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'post2channel',
            group: 'misc',
            memberName: 'post2channel',
            description: 'Post to Channel',
        })
    }
    async run (msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const channelIds = fs.readFile(`./commands/misc/channels.txt`, `utf-8`, (err, data) => {
            
        var newData = data.split(', ')
        console.log(newData)
        const channel = newData[0].toString()
        })
        
        
        const Mid = ['564466359107321856','764845064513650730']
        if(Mid.indexOf(msg.author.id)>-1){

        const dated = new Date  
        const info = {
            author: msg.author.username,
            date: dated,
            title: args
        }
        const jsonString = JSON.stringify(info)
        msg.attachments.forEach(a => {
            fs.writeFileSync(`./commands/misc/post2channel/${args}.gif`, a.url); // Write the file to the system synchronously.
        });
        fs.writeFile(`./commands/misc/p2cjson/${args}.gif.json`, jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
    await client.channels.cache.find(x => x.id === '803456129073807421').send('test')
        


        

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