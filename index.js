const path = require('path');
module.exports = function(dir, myModule){
	require("fs").readdirSync(dir).forEach(function(file) {
		if(file !== "index.js" && file.indexOf('.js')!== -1) {
			var name = file.substring(0, file.length - 3);
			var appDir = path.dirname(require.main.filename);
			var dir0 = dir.substring(appDir.length);
			myModule.exports[name] = require('../..'+ dir0 + '/' + file);
		}
	});
}
