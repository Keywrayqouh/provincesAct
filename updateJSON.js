var fs= require('fs')
exports.updateJSON = function(province,data){
    fs.writeFile(('./provinces/'+ province + ".json").toLowerCase(), JSON.stringify(data), function (err) {
        console.log('Updated!!!')
      });
}