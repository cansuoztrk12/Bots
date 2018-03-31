const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öpeceğinizi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Seni Öptü!**')
    .setImage(`https://cdn.discordapp.com/attachments/427082506911612937/427759724570738688/s-45ef63548767d94ba96b037e54af3b1dcc3dec4d.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz kişiyi öpersiniz.',
  usage: 'öp'
};
