const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`NAGATSO`, client.user.avatarURL())
  .setColor("BLUE")
  .setThumbnail(client.user.avatarURL())
  .setDescription("!!!avatar <@kişi> : belirtilen kişi nini profil ini atar \n !!ban-log <#kanal> : Belirtilen kanal ban log olarak ayarlanır \n !!ban-yetkili-rol <@rol> : Belirtilen role botta banlama yetkisi verir \n !!ban <@kişi> sebep : Belirtilen kişiyi banlar \n !!saat : Güncel saati gösterir \n !!sil <sayı> : Belirtilen sayı kadar mesaj siler \n !!korona : Günlük korona vakasını gösterir \n !!jail-sistemi : Jail yardım menü sü nü açar")
  .addField("Açıklama" , "Bot Adı")
  .setImage("https://cdn.discordapp.com/attachments/923365560144756766/926486410976964658/bnerror.gif")
.setFooter("Yardım Menüsü", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}