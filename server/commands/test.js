var bot = require('../bot');

module.exports = {
    query: /\/test/,
    description: '/test - just a test command',
    handler: function(msg) {
        bot.sendMessage(msg, 'OK :)');
    }
};