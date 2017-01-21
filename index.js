var fs = require('fs');
const path = require('path');
var addon =  process.argv[2];
var prepath = path.join(__dirname, '..','..');
var filepath = path.join(prepath, addon);

var file = require(filepath);
ReplaceKey(file, process.argv[3], process.argv[4]);

fs.writeFile(filepath, JSON.stringify(file), function (err) {
  if (err) return console.log(err);
});


function ReplaceKey(object, keytoassign, valuetoassign) {
  for (var x in object) {
    if (object.hasOwnProperty(x)) {
      if (typeof object[x] == 'object') {
        var array = object[x];
          for(var i in array){
          var key = array[i].key;
          var value = array[i].value;
          if(key == keytoassign ){
          array[i].value = valuetoassign;
          }
        }
      }
    }
  }
  console.log("Completed");
}
module.export = ReplaceKey;