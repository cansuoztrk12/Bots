const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  return message.author.sendEmbed(ozelmesajuyari).then(msg => {msg.delete(3500)})};
    let replies = ["Senin Muzun 50cm :banana:", "Senin Muzun 2cm :banana:", "Senin Muzun 20cm:banana:", "Senin Muzun 10cm :banana:", "Senin Muzun 80cm :banana:", "Senin Muzun 0cm :banana:", "Senin Muzun 31cm :banana:", "Senin Muzun 5cm :banana:", "Senin Muzun Yok xd", "Senin Muzun cm :banana:"];
    
    let result = Math.floor((Math.random() * replies.length))
    
    const ball = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor('RANDOM')
    .addField("Cevap :", replies[result]);
    message.channel.sendEmbed(ball)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ask', 'sor', 'konuş'],
  permLevel: 0
};

exports.help = {
  name: 'muzlum',
  description: 'Kaç cm oluğunu söyler.',
  usage: 'muzlum'
};