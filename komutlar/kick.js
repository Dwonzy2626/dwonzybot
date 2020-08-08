const Discord = require("discord.js");

exports.run = (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yeterli yetkin yok!")
  let user = message.mentions.users.first();

  if(!user) return message.channel.send("Kimi sunucudan atacağımı belirtmedin")
  
  message.guild.kick(user);
  
  
  message.channel.send(`${user} adlı üyeyi sunucudan attım.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'kick',
  description: 'Kişiyi sunucudan atar.',
  usage: '*kick @kullanıcı'
}