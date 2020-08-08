const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send(`\`${client.guilds.size.toLocaleString()}\` sunucuya hizmet verip \`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\` kişiyle ilgileniyor`);
};
//realcode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sunucular',
  description: 'Botun pingini gĂ¶sterir.',
  usage: '*sunucular'
};