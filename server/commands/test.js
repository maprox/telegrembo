const bot = require('../bot.js');

module.exports = {
    query: /\/test/,
    description: '/test - just a test command',
    handler: function(msg) {
        bot.sendMessage(msg.from.id, 'OK :)');
    }
};