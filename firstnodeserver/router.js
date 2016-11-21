var fs = require('fs');


function home(request, response) {
	if(request.url === '/') {
		fs.readFile("./layout/home.html", function(err, data){
			response.write(data);
			response.end();
		});
	}
}

function about(request, response) {
	if(request.rul === '/about') {
		fs.readFile("./layout/about.html", function(err, data) {
			response.write(data);
			response.end();
		})
	}
}

function detail(request, response) {
	var detailId = request.url.replace("/", "");
	if (detailId.length > 0) {
		response.write(detailId);
		response.end();
	}	
}

module.exports.home = home;
module.exports.about = about;
module.exports.detail = detail;
