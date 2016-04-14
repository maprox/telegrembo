var bot = require('../bot.js');
var template = require('../template.js');

module.exports = {
    query: /\/start/,
    handler: function(msg) {
        bot.sendMessage(msg.from.id, template.render('start.md', {
            username: msg.from.first_name,
            chatId: msg.from.id
        }), {
            parse_mode: 'Markdown'
        });
    }
};