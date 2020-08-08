const Discord = require('discord.js');

exports.run = (client, message) => {
  
var embed = new Discord.RichEmbed()
                                         
.setColor('RANDOM')
.setAuthor(`${client.user.username}`, client.user.avatarURL) 
.setDescription(`Buyur benim avatarım`)
.setImage(client.user.avatarURL)
.setFooter(`${client.user.username}`, client.user.avatarURL) 
  
message.channel.send(embed).catch()  
                           
};                                        
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'bot-pp',
 description: 'Botun pp sini Atar ',
 usage: '*bot-pp'
};