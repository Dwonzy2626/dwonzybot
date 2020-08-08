const Discord = require('discord.js'); 
const moment = require('moment');

exports.run = (client, message, args) => {

message.channel.sendMessage("<a:tikac:732538269136453683> Reboot atmayı onaylıyorsanız 30 saniye içinde 'evet' yazınız. <a:tikac:732538269136453683>")
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`<a:tik1:732538249750249522> Botun yeniden başlatma işlemi onaylandı! Yeniden başlatıyorum... <a:alarm3:732538292679213106>`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.send("<:no:729122390419701831> 30 saniye içinde 'Evet' yazmadığınız için yenileme işlemi iptal edildi. <:no:729122390419701831>");
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reboot'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'ping',
  usage: 'reboot'
};