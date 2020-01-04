const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjYyNzUzNzQ4NTQ3OTI4MDk0.XhB6sQ.szAj3J3ed0WjVND-85_dUlw2vGA);//BOT_TOKEN is the Client Secret
