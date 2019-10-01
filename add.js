
var readJSON = require('./readJSON')
var updateJSON = require('./updateJASON')
// module.exports= function(req,res){
//     var id = req.query.id;
//     var province = req.query.province;
//     var data = JSON.parse(readJSON.readJSON(province));
//     var average = Number(data.aveRate) + Number(id);
//     if ((Number(data.aveRate) != 0)) {
//         data.aveRate = average;
//         data.aveRate = Number(data.aveRate / 2).toFixed(2);
//         updateJSON.updateJSON(province, data)
//         res.end("" + data.aveRate)
//     } else {
//         data.aveRate = average;
//         data.aveRate = Number(data.aveRate).toFixed(2);
//         updateJSON.updateJSON(province, data)
//         res.end("" + data.aveRate)
//     }
// };

module.exports = function (req, res) {
    const fs = require("fs");
    var rate = req.query.rate;
    console.log(rate);
    var province = "./provinces/"+req.query.province + ".json";
    var province2 = fs.readFileSync(province);
    var NewData = JSON.parse(province2);
    var rating = (Number(NewData.rate) + Number(rate))


//     if ((Number(NewData.rate) != 0)) {
//         NewData.rate = NewData;
//         NewData.rate = Number(NewData.rate / 2).toFixed(2);
//         updateJSON.updateJSON(province, data)
//         res.end("" + NewData.rate)
//     } else {
//         NewData.rate= NewData;
//         NewData.rate = Number(NewData.rate).toFixed(2);
//         updateJSON.updateJSON(province, data)
//         res.end("" + NewData.rate)
//     }


//     NewData.rate = rating
//     NewData.rate = Number(Number(NewData.rate / 2).toFixed(2))
//     fs.writeFile(province, JSON.stringify(NewData,null,2), function (err) {
//         if (err) throw err;
//     });
//     res.end("New Average Rate " + NewData.rate)
// }