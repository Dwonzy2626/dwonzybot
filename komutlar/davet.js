const Discord = require ('discord.js');

exports.run = async (client, message) => {
    const embed = new Discord.RichEmbed()
 .setColor("BLUE")
 .setDescription('[Dwonzy Botu Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=732534109414490163&permissions=8&scope=bot) | [Destek Sunucum Gelmeyi Unutma](https://discord.gg/xNxfR42)')
 .setTimestamp()
    message.channel.send(embed)
   
 };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ["invitation"],
   permLevel: 0
 };
 exports.help = {
   name: 'davet',
   description: 'Botun davet bağlantılarını gösterir',
   usage: 'davet'
 };