const http = require('http');
const fs = require("fs");
const pug = require("pug");

//user pug functrion to render through the login Page
const renderLogin = pug.compileFile('pages/login.pug');
const renderHome = pug.compileFile('pages/Home.pug');
const renderSignup = pug.compileFile('pages/Signup.pug');




//Helper function to send a 404 error
function send404(response){
	response.statusCode = 404;
	response.write("Unknown resource.");
	response.end();
}

// Helper function to send 500 server error;
function send500(response){
	response.statusCode = 500;
	response.write("Server error.");
 	response.end();
}




// initilize the server
const server = http.createServer(function (request, response) {
	console.log(request.method+" -> "+request.url);

	// handle the request
	if(request.method === "GET"){
		if(request.url === "/" || request.url === "/Homepage"){
			let data = renderHome("./pages/Home.pug",{})
			response.statusCode = 200;
			response.end(data);

		}else if(request.url === "/Homepage.js"){
			//read Homepage.js file and send it back
			fs.readFile("Homepage.js", function(err, data){
				if(err){
					send500(response);
					return;
				}
				response.statusCode = 200;
				response.setHeader("Content-Type", "application/javascript");
				response.write(data);
				response.end();
			});

	}else if(request.url === "/login.js"){
		//read Homepage.js file and send it back
		fs.readFile("login.js", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "application/javascript");
			response.write(data);
			response.end();
		});

}else if(request.url === "/signin"){
		let data = renderLogin("./pages/login.pug",{})
		response.statusCode = 200;
		response.end(data);

	}else if(request.url === "/signup"){
		let data = renderSignup("./pages/signup.pug",{})
		response.statusCode = 200;
		response.end(data);

	}else if(request.url === "/login"){

		fs.readFile("profilepage.html", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/html");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/movie"){

		fs.readFile("movie.html", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/html");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/others"){

		fs.readFile("otherProfile.html", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/html");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/view"){

		fs.readFile("view.html", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/html");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/img/ilovem.jpg"){
	//console.log("get ilovem jpg");
		fs.readFile("img/ilovem.jpg", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "image/jpeg");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/img/ilovemb.jpg"){
	console.log("get ilovemb jpg");
		fs.readFile("img/ilovemb.jpg", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "image/jpeg");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/img/jumanji.jpg"){
		//console.log("inside jpg");
		fs.readFile("img/jumanji.jpg", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "image/jpeg");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/img/Sabrina.jpg"){
		//console.log("inside jpg");
		fs.readFile("img/Sabrina.jpg", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "image/jpeg");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/img/waitiing.jpg"){
		//console.log("inside jpg");
		fs.readFile("img/waitiing.jpg", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "image/jpeg");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/img/Sudden.jpg"){
		//console.log("inside jpg");
		fs.readFile("img/Sudden.jpg", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "image/jpeg");
			response.write(data);
			response.end();
		});

	}else if(request.url === "/style.css"){
		//console.log("inside css");
		//read css file
		fs.readFile("style.css", function(err, data){
			if(err){
				send500(response);
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/css");
			response.write(data);
			response.end();
		});
	}else{
			send404(response);
			return;
		}
	}else if(request.method === "POST"){
		//any handling in here
		send404(response);
		return;
	}
});

//Server listens on port 3000
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
