
module.exports ={
replacevalue: function (object, keytoassign, valuetoassign) {
  //console.log(object);
  if(keytoassign==null && valuetoassign==null){
    return "Key and Value cannot be null";
  }

  for (var x in object) {
    if (object.hasOwnProperty(x)) {
      if (typeof object[x] == 'object') {
        var status = "Could not find: "+ keytoassign;
        var array = object[x];
          for(var i in array){
          var key = array[i].key;
          var value = array[i].value;
          if(key == keytoassign ){
            status = "Found and updated: " + key;
          array[i].value = valuetoassign;
          }               
        }
      }
    }
  }
  return status;
}
}
