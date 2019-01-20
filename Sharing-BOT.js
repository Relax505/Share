const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [‏ستمرّ عليك لحظاتٌ تستطيعُ فيها فعل كلّ شيء.. هذه ليست قوة، إنما مقدرة، القوةُ تأتي من اللحظاتِ التي ظننتَ أنك لن تتمكن من فعل شيءٍ فيها، وأنها ستهزمكَ لا محالة، ثمّ انتصرتَ عليها!

سيرفر Harmony عوده حميده بإذن الله.. :emhar:
                               [https://discord.gg/YE2DMsC]
... [ ${member}  
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(${words[Math.floor(Math.random() * words.length)]}) 
}).catch(console.error)
}, timer)
})

client.login("NTI2NTQwMjM0NDM1OTg1NDM4.DyYoNw.CCuKki_nsgOW-3gXn2GnR5QmaEg") 