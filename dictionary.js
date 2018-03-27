const Dictionary = function (){

  let items = {};

  this.hasKey = function(key){
    return key in items;
  };

  this.addSet = function(key,value){
    //add new property to object items
    items[key] = value;
  };

  this.removeSet = function(key){
    if(this.hasKey(key)){
      delete items[key];
      return true;
    }
    else {
      return false;
    }
  };

  this.getValue = function(key){
      const value = this.hasKey(key)?items[key]:undefined;
      return value;
  };

  this.getValues = function(){
    let values = [];
    for(let key in items){
      if(this.has(key)){
        values.push(items[key]);
      }
    }
    return values;
  };

  this.clear = function(){
    items = {};
  };

  this.size = function(){
    let count = 0;
    for(let prop in items){
      if(items.hasOwnProperty(prop))
       ++count;
    }
    return count;
  };

  this.getKeys = function(){
    // equivalent to for in loop
    let keys = items.keys();
    return keys;
  };

  this.getDictionary = function(){
    return items;
  };


}
