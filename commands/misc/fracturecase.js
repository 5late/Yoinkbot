const commando = require('discord.js-commando');

const Discord = require('discord.js')
    

module.exports = class CSGOCaseUnboxing extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fracture',
            group: 'misc',
            memberName: 'fracture',
            description: 'Unbox the Fracture case.'
        })
    }
    async run(msg) {
    const images = [
        //coverts
        'https://www.ginx.tv/uploads/Andr%C3%A9s/AK-47_Legion_of_Anubis_by_Apel.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Desert_Eagle_Printstream.jpg',
        //pinks
        'https://www.ginx.tv/uploads/Andr%C3%A9s/m4a4_tooth_fairy_2_minds.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Glock-18_Vogue.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/XM1014_Entombed.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //pinks
        'https://www.ginx.tv/uploads/Andr%C3%A9s/m4a4_tooth_fairy_2_minds.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Glock-18_Vogue.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/XM1014_Entombed.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //purples
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAC-10_Allure.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Galil_AR_Connexion.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Tec-9_Brother.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MP5-SD_Kitbash.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/MAG-7_Monster_Call.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //blues
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SG533_Ol_Rusty.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/SSG_08_Mainframe_001.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/PP-Bizon_Runic.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p90_Freight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p250_Cassette.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/Negev_Ultralight.jpg',
        'https://www.ginx.tv/uploads/Andr%C3%A9s/p2000_Gnarled.jpg',
        //KNIFE
        'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_aa_fade_light_large.f24efcbcc28c8f3ddf18e1d777cde462b5c0c739.png',
        ]
    const image = images[Math.floor(Math.random() * images.length)];
    
    {
      
            const random = new Discord.MessageEmbed()
              .setTitle('Here are your winnings')
              .setAuthor('Xurxx')
              .setImage(image)
        
            msg.channel.send(random);
        }
    }
}
