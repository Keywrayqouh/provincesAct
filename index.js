var express = require('express')
var app = express()
var fs = require('fs')
var readTxt = require('./readTxt')

var readJSON = require('./readJSON')
var updateJSON = require('./updateJSON')
var path = require('path')

app.set('view engine', 'pug');
app.set('views', './views');
app.use(function (req, res, next) {
  readTxt(req, res, req.originalUrl);
  next();
})

app.use(express.static('public'))
app.use("/scripts", express.static(path.join(__dirname, '/scripts')));
app.use("/jquery", express.static(path.join(__dirname, '/jquery')));
app.get('/', function (req, res) {
  res.render('index');
})

app.all('/provinces/:id', function (req, res) {
  fs.readFile('./provinces/' + req.params.id + ".json", 'utf-8', function (err, data) {
    if (err) throw err;
    let obj = JSON.parse(data);
    res.render('index', {
      name: obj.name_of_province,
      img1: obj.image1,
      img2: obj.image2,
      img3: obj.image3,
      GofI: obj.group_of_island,
      about: obj.about,
      pop: obj.population,
      del: obj.delicacies,
      shortname: obj.shortname
    });
  });
  app.get('/rate', (req, res) => {
    var id = req.query.id;
    var province = req.query.province;
    console.log(province)
    var data = JSON.parse(readJSON.readJSON(province));
    console.log(data)
    var average = Number(data.aveRate) + Number(id);
    if ((Number(data.aveRate) != 0)) {
        data.aveRate = average;
        data.aveRate = Number(data.aveRate / 2).toFixed(2);
        updateJSON.updateJSON(province, data)
        res.end("" + data.aveRate)
    } else {
        data.aveRate = average;
        console.log(data.aveRate)
        data.aveRate = Number(data.aveRate).toFixed(2);
        updateJSON.updateJSON(province, data)
        res.end("" + data.aveRate)
    }
  })
});
app.listen(8080);
