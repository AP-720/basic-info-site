import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
	let path;
	// Needed this so as to include the css response in one request.
	let contentType = "text/html";

	// Routes

	switch (req.url) {
		case "/":
			path = "index.html";
			break;
		case "/about.html":
			path = "about.html";
			break;
		case "/contact-me.html":
			path = "contact-me.html";
			break;
		case "/styles.css":
			path = "styles.css";
			contentType = "text/css";
			break;
		default:
			path = "404.html";
			break;
	}

	// Set header content
	res.setHeader("Content-Type", contentType);

	// Send http response
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			// res.write(data)
			res.end(data);
		}
	});
});

server.listen(8080, "localhost", () => {
	console.log("Listening on port 8080");
});
