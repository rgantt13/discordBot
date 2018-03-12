// JavaScript source code
const botconfig = require("../../../BotConfig/botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	bot.user.setUsername("TestBot");
	console.log(`${bot.user.username} is online!`);
	
	bot.user.setGame("Fuck you~! :)");
});


bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);


	//!say Hello
	if(cmd === `${prefix}hello`){
		return message.channel.send("Hello");
	}

	if(cmd === `${prefix}progress`){
		return message.channel.send("So far I have set up the ability to say 'Hello!'");
	}

});


bot.login(botconfig.token);
