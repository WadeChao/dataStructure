const Graph = function(){

  let vertices = [];

  const adjList = new Dictionary();

  this.addVertex = function(v){
    vertices.push(v);
    adjList.addSet(v,[]);
  };

  this.addEdge = function(v,w){
    adjList.getValue(v).push(w);
    adjList.getValue(w).push(v);
  }

  this.printGraph = function() {
		let s = '';
		for(let i = 0; i < vertices.length; i++) {
			s += vertices[i] + '->';
			let neighbors = adjList.getValue(vertices[i]);
			for(let j = 0; j < neighbors.length; j++) {
				s += neighbors[j] + ' ';
			}
			s += '\n';
		}
		return s;
	}

}
