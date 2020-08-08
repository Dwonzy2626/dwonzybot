const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let bug = args.slice(0).join(' ')
if(!bug) {
const hata = new Discord.RichEmbed()
.setColor('RED')
.setDescription(`Bugu Belirtmediniz!`)
return message.channel.send(hata)
}
const embed = new Discord.RichEmbed()
.setTitle(`Bug Bildirimi`)
.setColor('BLUE')
.setDescription(`**Bugu Bildiren Kişi:** <@${message.author.id}> \n **Bildirdiği Bug:** \`${bug}\``)
client.channels.get('732586434569175051').send(embed)
  
const başarılı = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`Bug Bildiriminiz Başarıyla Gönderildi.`)
message.channel.send(başarılı)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0  
};
exports.help = {
name: 'bug-bildir',
description: 'Bottaki Bugları Bildirmeye Yarar.',
usage: 'bug-bildir'
};