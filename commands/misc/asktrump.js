const commando = require('discord.js-commando');
const fs = require('fs');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const prefix  = '?'
module.exports = class AskTrumpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'asktrump',
            group: 'misc',
            memberName: 'asktrump',
            description: 'Ask Trump a question.',
            args:[
              { 
                  key:'text',
                  prompt: 'What would you like to ask trump?',
                  type: 'string',
              }
          ]
        })
    }
    async run (msg, { text }) {
      const args = msg.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
const trumpImage =['https://deadline.com/wp-content/uploads/2019/10/shutterstock_editorial_10434333bm.jpg',
'https://storage.googleapis.com/afs-prod/media/96dffec1051948df81bcb27934ea6498/800.jpeg',
'https://pyxis.nymag.com/v1/imgs/a87/0e5/79eb69c65aa0d0816297dfe7bb01c0e0df-donald-trump.rsquare.w700.jpg',
'https://www.ctvnews.ca/polopoly_fs/1.4985306.1592257551!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzp0c3SHqW_CXz8kSyUEgPXVy74JjPrDH8Hw&usqp=CAU',
'https://ca-times.brightspotcdn.com/dims4/default/a31eb54/2147483647/strip/true/crop/4896x3264+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcb%2F17%2Fc0526ee141ff9e0ec6e2d7bf4ccc%2Felection-2020-debate-18753.jpg',
'https://cnet1.cbsistatic.com/img/QKFb6_xdB9Y6sVoR-Dm7Gefewp0=/0x0:4531x3104/940x0/2020/09/18/edcaf3a1-651a-468a-b748-d19411786b85/trump-gettyimages-1228580076.jpg',
'https://media.vanityfair.com/photos/5e8759e052ad2c00089f5043/master/pass/Trump4.3.jpg',
'https://ichef.bbci.co.uk/images/ic/720x405/p08bfb4x.jpg',
'https://miro.medium.com/max/800/1*Ym8adEvbuxONOeqVx3Sp-A.gif']
const image = trumpImage[Math.floor(Math.random() * trumpImage.length)];

const responses = ['Drink Bleach!', 'Fake NEWS!', 'VOTE!!!!!', 'CHINA!', 'CORRUPT!!!!!', 'MAKE AMERICA GREAT AGAIN!!!', 'OBAMAGATE!!!!', 'You are the enemy of the people.', 'LAW AND ORDER!!!!', 'RIGGED ELECTION!!!', 'CROOKED HILLARY!!', 'SLEEPY JOE!!']
const response = responses[Math.floor(Math.random()* responses.length)];
console.log(args)
      const embed = new Discord.MessageEmbed()
      .setTitle(msg.author.username + ' asked Trump: ' + text)
      .setThumbnail(image)
      .setDescription('Trump answered with: ' + response)
      .setFooter(`Yoinkbot`, `https://cdn.discordapp.com/embed/avatars/1.png`)

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