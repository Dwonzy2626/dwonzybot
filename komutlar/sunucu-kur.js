const Discord = require('discord.js');


exports.run = (client, message, params) => {

        
        message.channel.send(':1234: **Sunucun için küçük bir altyapı hazırlanıyor!**');
        
          message.guild.createChannel('mod-log');
          message.guild.crateChannel(`log`)
          message.guild.createChannel('giriş-çıkış');
          message.guild.createChannel('?kurallar?');
          message.guild.createChannel('?duyuru?');
          message.guild.createChannel('?video-paylaşım?');
          message.guild.createChannel('?sohbet?');
          message.guild.createChannel('?fotoğraf?');
          message.guild.createChannel('?bot-komutları?');
          message.guild.createChannel('?yetki̇li̇?');
       
        message.channel.send(':white_check_mark: **Herşey Kuruldu**');
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucukurulum","sunucukur","sunucu-kurulum","sunucu-kur","odalarıkur","odaları-kur",""],
  permLevel: 3
};

exports.help = {
  name: 'kurulum',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: '*kurulum'
};