var bot = require('../bot');
var emoji = require('node-emoji');

module.exports = {
    query: /\/test/,
    description: '/test - just a test command',
    handler: function(msg) {
        bot.sendMessage(msg, "OK " + emoji.get('coffee'));
    }
};