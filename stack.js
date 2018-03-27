const Stack = function(){

  let items = [];

  this.push = function(elements){
    items.push(elements);
  };

  this.pop = function(){
    if(this.getSize>0)
      return items.pop();
  };

  this.peek = function(){
    return items[this.getSize()-1];
  };

  this.isEmpty = function(){
      const isEmpty = (items.length===0)?true:false;
      return isEmpty;
  };

  this.clearStack = function(){
    items = [];

  };

  this.getSize = function(){
    return items.length;
  };

};
