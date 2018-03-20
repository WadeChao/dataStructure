

const linkedlist = function (){
  const Node = function(element) {
  		this.element = element;
  		this.next = null;
  	}
  let length = 0;
  let head = null;

  this.appendElement = function(element){
    const node = new Node(element);
    let current;

    if(head == null){
      head = node;
    }
    else {
      current = head;
      while(current.next !== null){
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.addElement = function(position,element){
    if(position >= 0 && position<= length){
      const node = new Node(element);
      let current = head;
      let index = 0;
      let previous;

      if(position === 0 ){
        head = node;
        head.next = current;
      }
      else{
        while(index<position){
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.next = current;
      }
      length++;
    }
    else {
      return;
    }
  };




    this.removeElement = function(position){
      if(position >= 0 && length>0){

        let current = head;
        let index = 0;
        let previous;

        if(position === 0){
          head = head.next;
        }
        else{
          while(index<position){
            previous = current;
            current = current.next;
            index++;
          }
          previous.next = current.next;
        }
        length++;
      }
      else {
        return;
      }
    };


  this.getLength = function(){
    return length;
  }

  this.printList = function() {
  	let current = head;
  	let string = '';
  	while(current) {
  		string += current.element;
  	string+="->";
  		current = current.next;
  	}
  	return string;
  }

  this.getElementIndex = function(element) {
    let current = head;
    let index = -1;
    while(current){
        index++;
        if(current.element == element)
          return index;
        else {
          current = current.next;
        }
    }
    return index;
  }


}
