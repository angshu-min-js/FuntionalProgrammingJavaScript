function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var result= arr1.concat(arr2.map(function(newin){
      for(var i in arr1)
        {
          if(newin[1]===arr1[i][1])
          {arr1[i][0]=arr1[i][0]+newin[0];
            newin=false;}
        }
      return newin;
    }));
  return result.filter(function(element){return element;}).sort(function (a, b) 
   {
    if (a[1] === b[1]) return;
    return (a[1] < b[1]) ? -1 : 1;
  });
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);
