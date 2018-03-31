const Discord = require('discord.js');
const botconfig = require('../botconfig.json');

var prefix = botconfig.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `s!2018 = 2018 Hakkında Fotoğraf Atar! \ns!pcaç = Windows 10 u Açarsınız! \ns!banned Banned Hakkında Fotoğraf Atar! \ns!avatarım Avatarınızı Gösterir! \ns!herkesebendençay = Herkese Çay Alırsınız. \ns!koş = Koşarsınız.\ns!çayiç = Çay İçersiniz. \ns!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \ns!çayaşekerat = Çaya Şeker Atarsınız. \ns!yumruh-at = Yumruk Atarsınız. \ns!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \ns!serverinfo = Sunucu Bilgilerini Atar! \ns!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \ns!8ball Sorduğunuz Sorulara [Evet,Hayır,Bilmiyorum] Diye Cevaplar \ns!kedi Rastgele Kedi Fotoğrafları Atar! \ns!kopek Rastgele Köpek Fotoğrafları Atar! \ns!odeme İstediğiniz Kişiye İstediğiniz Miktarda Para Verirsiniz! \ns!para Paranızı Gösterir! \ns!seviye XP Bilgilerinizi Gösterir \ns!soyle Merhaba Gibi Mesaj Yazarsanız Botta Cevap Verecektir (Daha Çok Gelecek Soyle Komuta Mesaj) \ns!espiri Bot Size Espiri Yapar! `)
  .addField("**Sunucu Yetkili Komutları**", `s!yasakla = İstediğiniz Kişiyi Sunucudan Banlar. \ns!at  = İstediğiniz Kişiyi Sunucudan Atar. \ns!unban = İstediğiniz Kişinin Yasağını Açar. \ns!gecici-sustur = İstediğiniz Kişiyi Susturur. -MUTED- \ns!oylama = Oylama Açar. \ns!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \ns!uyar İstediğiniz Kişiyi Uyarır! \ns!rol-al İstediğiniz Kişinin Belirtilen Rolünü Alır \ns!rol-ver İstediğiniz Kişiye Belirtilen Rolü Verir! \ns!kilit İstediğiniz Kanalı Kilitler (Susturur) \ns!temizle İstediğiniz Miktarda Mesajları Siler`)
.addField("**Botun Ana Komutları**", "s!yardım = BOT Komutlarını Atar. \ns!botbilgi = Bot Bilgilerini Atar \ns!ping = BOT Gecikme Süresini Söyler. \ns!davet = BOT Davet Linkini Atar. \ns!reports İstediğiniz Kişiyi Şikayet Edersiniz! \ns!on-ek Botun Prefixini (On Ekini) Değiştirirsiniz! \ns!serverinfo Sunucunun Bilgilerini Atar \ns!uyari-seviyesi İstediğiniz Kişinin Kaç Uyarısı Olduğunu Gösterir \ns!yapimcim Bu Komutla Botun Sahibini Öğrenebilirsiniz! \ns!saat Bu Komutla Saatin Kaç Olduğunu Öğrenebilisiniz! \ns!lmgtfy İstediğiniz Şeyi Google Gibi Bota Aratabilirsiniz! \ns!kisaltma İstediğiniz Linki Kısaltarak Verir! \ns!info-yas Yaşını Yazınca İsminin Yanına Tag Olarak Yaşın Yazıyor!")
.addField("**Yapımcı Komutları:**", "**%100 Türkcedir Botumuz!**")
.setFooter("Zamanla yeni komutlar getirmeye calisiyoruz!")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
