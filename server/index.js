var fs = require('fs');

require.extensions['.md'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var commands = [];
var bot = require('./bot.js');
fs.readdirSync('commands').forEach(function(commandFile) {
    var command = require('./commands/' + commandFile);
    if (command && command.query && command.handler) {
        bot.onText(command.query, command.handler);
        if (command.description) {
            commands.push(command);
        }
    }
});

var template = require('./template.js');
bot.onText(/\/help/, function(msg) {
    bot.sendMessage(msg.from.id, template.render('help.md', {
        commands: commands
    }), {
        parse_mode: 'Markdown'
    });
});