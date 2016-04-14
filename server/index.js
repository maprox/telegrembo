var fs = require('fs');

require.extensions['.md'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var commands = [];
var bot = require('./bot');
fs.readdirSync('commands').forEach(function(commandFile) {
    var command = require('./commands/' + commandFile);
    if (command && command.query && command.handler) {
        bot.onText(command.query, command.handler);
        if (command.description) {
            console.log('Found command: ' + command.description);
            commands.push(command);
        }
    }
});

var template = require('./template');
bot.onText(/\/help/, function(msg) {
    bot.sendMessage(msg, template.render('help.md', {
        commands: commands
    }), {
        parse_mode: 'Markdown'
    });
});

var config = require('./config');
var broker = require('./broker');
broker.receive(config.amqp.queue, function(data, message, channel) {
    if (data['send_to'] && data.message) {
        console.log(' [*] Sending "%s" to %s', data.message, data['send_to']);
        bot.sendMessage(data['send_to'], data.message);
    }
    channel.ack(message);
});