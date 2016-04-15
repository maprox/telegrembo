var bot = require('../bot');
var template = require('../template');

module.exports = {
    query: /\/start/,
    handler: function(msg) {
        bot.sendMessage(msg, template.render('start.md', {
            username: msg.from.first_name,
            chatId: msg.chat ? msg.chat.id : msg.from.id
        }), {
            parse_mode: 'Markdown'
        });
    }
};