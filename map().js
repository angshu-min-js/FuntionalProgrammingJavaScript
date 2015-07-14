Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(itemInArray+1);

	});
console.log(results);
	return results;
};
