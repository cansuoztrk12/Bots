const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Üzgünüm dostum, bunu yapamazsın.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Bu kullanıcıyı bulamadım");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Bir rol belirtin!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Bu rol bulunamadı.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Bu rolleri yok.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, kaybettin ${gRole.name} rolü.`)
  }catch(e){
    message.channel.send(`RIP'ye <@${rMember.id}>, Taşındı ${gRole.name} onlardan. Onları DM yapmaya çalıştık, ancak DM'leri kilitlendi.`)
  }
}

module.exports.help = {
  name: "rol-al"
}
