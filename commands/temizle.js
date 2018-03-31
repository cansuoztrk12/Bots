const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Mesajları Yönetme Yetkin Olmadan Temizleyemem!");
  if(!args[0]) return message.channel.send("Kaç mesaj sileceğimi belirtmedin!");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} Mesaj Temizlendi!`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "temizle"
}
