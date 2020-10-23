const http = require('http');
const fs = require("fs");

//Create a server, giving it the handler function
//Request represents the incoming request object
//Response represents the outgoing response object
//Remember, you can break this apart to make it look cleaner
const server = http.createServer(function (request, response) {
	console.log(request.url);
	// handle the request
	if(request.method === "GET"){
		if(request.url === "/" || request.url === "/Homepage.html"){
			//read the todo.html file and send it back
			fs.readFile("Homepage.html", function(err, data){
				if(err){
					response.statusCode = 500;
					response.write("Server error : ");
					response.end();
					return;
				}
				response.statusCode = 200;
				response.setHeader("Content-Type", "text/html");
				response.write(data);
				response.end();
			});
		}else if(request.url === "/Homepage.js"){
			//read Homepage.js file and send it back
			fs.readFile("Homepage.js", function(err, data){
				if(err){
					response.statusCode = 500;
					response.write("Server error : ");
					response.end();
					return;
				}
				response.statusCode = 200;
				response.setHeader("Content-Type", "application/javascript");
				response.write(data);
				response.end();
			});
		//Add any more 'routes' and their handling code here
		//e.g., GET requests for "/list", POST request to "/list"
		}else{
			response.statusCode = 404;
			response.write("Unknown resource.");
			response.end();
		}
	}else if(request.method === "POST"){
		//any handling in here
		response.statusCode = 404;
		response.write("Unknown resource.");
		response.end();
	}else if(request.url === "style.css"){
		//read css file
		fs.readFile("style.css", function(err, data){
			if(err){
				response.statusCode = 500;
				response.write("Server error : ");
				response.end();
				return;
			}
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/css");
			response.write(data);
			response.end();
		});

	}
});

//Server listens on port 3000
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
