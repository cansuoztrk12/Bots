const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply(':warning: **UYARI** :warning: : Altı Çizili Yazmam İçin Herhangi Bir Şey Yazmalısın.');
  message.delete();
  message.channel.send('__**' + mesaj + '**__');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['underlightyaz', 'altıçiziliyaz', 'altıçizili'],
  permLevel: 0
};

exports.help = {
  name: 'underlight',
  description: 'İstediğiniz Şeyi Bota Altı Çizili Yazdırır.',
  usage: 'underlight [Altı Çizili Yazdırmak İstediğiniz Yazı]'
};
