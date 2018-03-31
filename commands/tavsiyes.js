const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Tavsiye vermeyi unuttun.');
    message.channel.send({embed: {
        color: 0xff8000,
        description: "Tavsiyeni gönderdim ! En kısa 3 günde size dönüş olacak ✅ \nSpam yazmayınız aksi takdirde engellenirsin."
      }});
    let str = "<@373380659932168192>";
    let id = str.replace(/[<@!>]/g, '');
    client.fetchUser(id)
        .then(user => {user.send(`Tavsiye : **${mesaj}**\n\nGönderen: **${message.author.username}**`)})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'tavsiye',
  usage: 'tavsiye [yazı]'
};
