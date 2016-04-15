var bot = require('../bot');

module.exports = {
    query: /\/shove (\S+) (.+)/,
    description: '/shove channelId message - send message to some channel',
    handler: function(msg, match) {
        bot.sendMessage(match[1], match[2]);
    }
};