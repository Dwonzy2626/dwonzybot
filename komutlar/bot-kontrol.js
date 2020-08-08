const Discord = require("discord.js");

module.exports.run = async (message, args) => {
  let msg = await message.channel.send("Test Edilmeye Başlamıstır");
   let msg2 = await message.channel.send("Bitmek Uzere Sabırılı Ol")
  
 return message.channel.send('**Botunuz Aktıfdir Efendım**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kontrol"],
  permLevel: 0
};

exports.help = {
  name: 'botkontrol'
};