const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle("Izin yok")
    .setColor(config.red)
    .addField("Yetersiz izin", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}
