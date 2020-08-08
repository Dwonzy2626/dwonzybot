const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let bs = args.slice(0).join('+');
  
  let id = Number(args[0]);
  

   
    if(isNaN(id)) return message.channel.send("Lütfen bir sayı belirt ``örn: *temizle 10``");
  
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu Komutu Kullanmak İçin İzniniz Yok!");
  
if(!args[0]) return message.channel.send("Lütfen bir sayı belirt ``örn: +temizle 10``");
  
message.channel.bulkDelete(args[0]).then(() => {
  
  message.channel.send(`Başarıyla bu kanalda \`${args[0]}\` adet mesaj silindi. `).then(msg => msg.delete(5000));
  
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','süpür','temiz',"temizle"],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Sİldim.',
  usage: '*temizle <silinicek mesaj sayısı>'
};