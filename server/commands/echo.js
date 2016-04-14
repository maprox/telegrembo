var bot = require('../bot');

module.exports = {
    query: /\/echo(\s.*)?/,
    description: '/echo - echoes everything after the command',
    handler: function(msg, match) {
        bot.sendMessage(msg, match[1] || 'Use it like "/echo Hi"');
    }
};