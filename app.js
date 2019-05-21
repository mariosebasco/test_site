//required
const express = require('express')
const fs = require('fs');
const app = express()
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


/* ************************************************** */
/*                                                    */
/*               GET FUNCTIONS                        */
/*                                                    */
/* ************************************************** */
app.use(express.static(__dirname + '/assets/')); //Serves resources from assets folder
app.use(express.static(__dirname + '/images/')); //Serves resources from images folder

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/index.html',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/food.html',function(req,res){
    res.sendFile(path.join(__dirname+'/food.html'));
});

app.get('/countriesToDo', function (req, res) {
    fs.readFile("countries/countriesToDo.txt", 'utf8', function(err, data) {
	if (err) throw err;
	res.send(data);
    });
});

app.get('/countriesInProgress', function (req, res) {
    fs.readFile("countries/countriesInProgress.txt", 'utf8', function(err, data) {
	if (err) throw err;
	res.send(data);
    });
});

app.get('/countriesDone', function (req, res) {
    fs.readFile("countries/countriesDone.txt", 'utf8', function(err, data) {
	if (err) throw err;
	res.send(data);
    });
});


// app.get('/helpers.js',function(req,res){
//     res.sendFile(path.join(__dirname+'/helpers.js'));
// });



app.listen(3000, () => console.log('app listening on port 3000!'))
