var token = process.env.TOKEN;
if (!token) {
    console.log('Sorry you need to set TOKEN environment variable');
    return;
}

var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.getMe().then(function(me) {
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});

module.exports = bot;