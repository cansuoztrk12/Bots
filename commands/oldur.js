const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öldüreceğini Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Seni Öldürdü!**')
    .setImage(`https://cdn.discordapp.com/attachments/406050958486011904/427752401793974272/ates-eden-silah.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oldur',
  description: 'İstediğiniz kişiyi öldürürsünüz.',
  usage: 'tekme-at'
};
