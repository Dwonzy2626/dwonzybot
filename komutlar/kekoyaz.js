const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
      let mesaj = args.slice(0).join('%20');
    if(!mesaj) return message.channel.send(`KeKO Bir SekIldE nE yAzmaK IsTerSin`) 
    const text = await snekfetch.get(`https://mrdarkapi.glitch.me/api/kekoyaz/`+mesaj);
    const body = text.body;
    message.channel.send(body.yazi)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    kategori: 'genel'
}

exports.help = {
    name: 'kekoyaz',
    description: 'keko yazi yazdirir',
    usage: ''
}