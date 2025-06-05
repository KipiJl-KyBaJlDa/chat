const http = require('http')
const fs = require('fs')
const path = require('path')
const nodemon = require('nodemon')
// -----------------------------
const indexHTMLFile = fs.readFileSync(path.join(__dirname, 'static', 'index.html'))
const styleFile = fs.readFileSync(path.join(__dirname, 'static', 'style.css'))
const scriptFile = fs.readFileSync(path.join(__dirname, 'static', 'script.js'))

const server = http.createServer((req, res) => {
	switch(req.url){
		case '/': return res.end(indexHTMLFile)
		case '/style.css': return res.end(styleFile)
		case '/script.js': return res.end(scriptFile)
	}

	res.statusCode = 404
	return res.end('ERROR 404!')
})

server.listen(3000)

// npm i -g nodemon
// npm i --save-dev nodemon