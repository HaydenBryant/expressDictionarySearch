const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')
const data = require("./data");
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendfile("index.html");
});

app.post('/', function(req, res) {
    var searchWord = req.body.searchWord;

    if (data[searchWord]) {
        res.send("<h2>" + searchWord + " is in the dictionary</h1>");
        
    }
    else {
        res.send("<h2>" + searchWord + " is not in the dictionary</h1>");
    }
    res.end
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
