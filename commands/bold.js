const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply(':warning: **UYARI** :warning: : Kalın Yazmam İçin Herhangi Bir Şey Yazmalısın.');
  message.delete();
  message.channel.send('**' + mesaj + '**');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kalınyaz', 'boldyaz'],
  permLevel: 0
};

exports.help = {
  name: 'bold',
  description: 'İstediğiniz Şeyi Bota Kalın Yazdırır.',
  usage: 'bold [Kalın Yazdırmak İstediğiniz Yazı]'
};
