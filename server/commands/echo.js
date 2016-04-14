const bot = require('../bot.js');

module.exports = {
    query: /\/echo(\s.*)?/,
    description: '/echo - echoes everything after the command',
    handler: function(msg, match) {
        bot.sendMessage(msg.from.id, match[1] || 'Use it like "/echo Hi"');
    }
};