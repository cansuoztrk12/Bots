const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Üzgünüm dostum, bunu yapamazsın.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Bu kullanıcıyı bulamadınız.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Bir rol belirtin!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Bu rol bulunamadı.");

  if(rMember.roles.has(gRole.id)) return message.reply("Onlar zaten bu role sahipler.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Tebrikler, size rol verilmiş ${gRole.name}`)
  }catch(e){
    message.channel.send(`Tebrikler <@${rMember.id}>, rol aldılar ${gRole.name}. Onları DM yapmaya çalıştık, ancak DM'leri kilitlendi.`)
  }
}

module.exports.help = {
  name: "rol-ver"
}
