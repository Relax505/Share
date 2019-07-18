const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("love you discord");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [‏ستمرّ عليك لحظاتٌ تستطيعُ فيها فعل كلّ شيء.. هذه ليست قوة، إنما مقدرة، القوةُ تأتي من اللحظاتِ التي ظننتَ أنك لن تتمكن من فعل شيءٍ فيها، وأنها ستهزمكَ لا محالة، ثمّ انتصرتَ عليها!

مرحباً أو مُرحباً Tactful.
                               [https://discord.gg/amtnCCq]
... [ ${member}  
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(${words[Math.floor(Math.random() * words.length)]}) 
}).catch(console.error)
}, timer)
})

client.login("NjAxMjgxNTc0NzI1NzQ2Njg5.XTABNw.FU864IxuZ12IfQe6w0GGTj9VBaE") 
