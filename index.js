module.exports = function(content, file, conf) {
	if (!fis.util.is(conf.file, 'Array')) {
		conf.file = [conf.file];
	}

	var importText = '';
	for (var i = 0; i < conf.file.length; i++) {
		if (conf && fis.util.is(conf.file[i], 'String')) {
			importText += ('@import "' + conf.file[i] + '";\n');
		} else {
			fis.log.error('Param file{String|Array} required. Please check settings.parser["less-import"].');
		}
	};
	
	return importText + content;
};