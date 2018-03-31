const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Yapımcım; 😍Cansu😍#1908**")
    .setColor("#15f153")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"yapimcim"
}
