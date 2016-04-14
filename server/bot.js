var config = require('./config.js');

if (!config.telegram.token) {
    console.log('Sorry you need to set TOKEN environment variable');
    return;
}

var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(config.telegram.token, { polling: true });

bot.getMe().then(function(me) {
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});

module.exports = {
    /**
     * Add command handler
     *
     * @param {String} query
     * @param {Function} handler
     */
    onText: function(query, handler) {
        return bot.onText(query, handler);
    },

    /**
     * Sends a telegram
     *
     * @param {String|Number|Object} msg
     * @param {String} message
     * @param {Object} options
     */
    sendMessage: function(msg, message, options) {
        var chatId = msg;
        if (msg.chat) {
            chatId = msg.chat.id;
        } else if (msg.from) {
            chatId = msg.from.id;
        }
        bot.sendMessage(chatId, message, options);
    }
};