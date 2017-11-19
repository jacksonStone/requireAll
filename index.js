
module.exports = function(dir, myModule){
	require("fs").readdirSync(dir).forEach(function(file) {
		if(file !== "index.js") {
			var name = file.substring(0, file.length - 3);
			myModule.exports[name] = require('./'+file);
		}
	});
}
