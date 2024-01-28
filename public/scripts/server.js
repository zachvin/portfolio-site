import * as http from 'node:http'
import * as fs from 'node:fs'

const PORT=8080; 

fs.readFile('../index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
