const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Bilgisi")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Adı", bot.user.username)
    .addField("Açıklandı", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botbilgi"
}
