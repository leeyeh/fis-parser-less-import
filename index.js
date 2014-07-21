module.exports = function(content, file, conf) {
    if (conf && fis.util.is(conf.file, 'String')) {
        return '@import "' + conf.file + '";\n' + content;
    }
    else {
        fis.log.error('Param file{String} required. Please check settings.parser["less-import"].');
    }
};