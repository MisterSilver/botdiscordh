const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Commande: /help");
    console.log("Connected");
});

bot.login("NDUwMDU0MDg1NzQ4NTg4NTQ1.Dexldg.Bp-BQ3KyHXROQvfHrpUJMcWtkfc");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -/help");
    }

    if (message.content === "Salut") {
        message.reply("Bien le bonjour. :smirk:");
        console.log("Commande Salut effectué");
    }
});    
