
module.exports = function(dir, myModule){
	const normalizedPath = require("path").join(dir, ".");
	require("fs").readdirSync(normalizedPath).forEach(function(file) {
		if(file !== "index.js") {
			var name = file.substring(0, file.length - 3);
			myModule.exports[name] = require('./'+file);
		}
	});
}
