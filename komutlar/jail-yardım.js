const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('926504480378339359')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
.addField('**:white_check_mark: Jail Komutları :white_check_mark:**',`
**\n:white_small_square: jail-kanal #kanal ** : Jail Log Kanalı Belirtirsiniz
**:white_small_square: jail-rol @rol ** : Jail Atınca Verilecek Rolü Belirtirsiniz!
**:white_small_square: jail-yetkilisi @rol ** : Kimlerin Jail Atacağını Belirtirsiniz!
**:white_small_square: jail-@kişi ** : Jail Atarsınız`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/api/oauth2/authorize?client_id=926504480378339359&permissions=8&scope=bot)\n[:white_check_mark: Destek Sunucu](https://discord.gg/CfqRKNSQdY)\n[:white_check_mark: Website](https://img.freepik.com/free-photo/coming-soon-neon-sign-dark-background-3d-rendering_35913-1058.jpg?size=626&ext=jpg)")

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'jail-yardım',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};