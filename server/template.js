var dot = require('dot');
dot.templateSettings.strip = false;

var templateCache = {};
var getTemplateFn = function(templatePath) {
    if (!templateCache[templatePath]) {
        templateCache[templatePath] =  dot.template(require(templatePath));
    }
    return templateCache[templatePath];
};

module.exports = {
    /**
     * Renders command's template which should be
     * located within "templates" folder
     *
     * @param {String} templateFile
     * @param {Object} options
     */
    render: function(templateFile, options) {
        return getTemplateFn('./templates/' + templateFile)(options);
    }
};