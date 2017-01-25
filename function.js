
module.exports ={
replacevalue: function (object, keytoassign, valuetoassign) {
  //console.log(object);
  if(keytoassign==null && valuetoassign==null){
    return "Key and Value cannot be null";
  }

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
  return "complete";
}
}
