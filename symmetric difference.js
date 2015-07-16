function sym(args) {
 return [].slice.apply(arguments).reduce(function(previous,current){
     current.filter(function(value, index, self){ //for unique
       return self.indexOf(value) === index;}).map(function(element){ //pushing array
       var loc = previous.indexOf(element);
        a= [loc !== -1 ? previous.splice(loc,1): previous.push(element)];
     }); return previous;           
        },[]);
  }

sym([1, 2, 3], [5, 2, 1, 4]);
