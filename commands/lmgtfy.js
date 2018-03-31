const encode = require('strict-uri-encode');

exports.run = (client, message, args, tools) => {

  let question = encode(args.join(' '))

  let link = `https://www.lmgtfy.com/?q=${question}`;

  message.channel.send(`**<${link}>**`);

}

exports.help = {
  name: 'lmgtfy',
  description: 'İstediğiniz Şeyi Lmgtfy de Arar!',
  usage: 'lmgtfy (mesaj)'
};
