function() {
 //.map
  return newReleases.map(function(video) { return {id: video.id, title: video.title}; });
  //.filter .map
  return newReleases.filter(function(elements){return elements.rating===5}).map(function(elements){return elements.id});
  //flatten
  movieLists.forEach(function(movieList) {movieList.videos.forEach(function(video) {allVideoIdsInMovieLists.push(video.id);});});
  //.apply
  results.push.apply(results,subArray);
  //concatAll
  return movieLists.map(function(movie) {return movie.videos.map(function(video) {return video.id;});}).concatAll();
  //filter concat map
  return movieLists.map(function(movieList) {return movieList.videos. map(function(video) {	return video.boxarts.
			  filter(function(boxart) {return boxart.width === 150;}).map(function(boxart) {
				return {id: video.id, title: video.title, boxart: boxart.url};});}).concatAll();}).concatAll();}
	// concatMap
	 return movieLists.concatMap(function(movieList) {return movieList.videos.concatMap(function(video) {	return video.boxarts.
			  filter(function(boxart) {return boxart.width === 150;}).map(function(boxart) {
				return {id: video.id, title: video.title, boxart: boxart.url};});});});
// reduce
return ratings.reduce(function(a,b){if(a>b) return a; else return b;});

//reduce map

return boxarts.
    reduce(function(a,b){
    if((a.width*a.height)>(b.width*b.height))
      return a;
      else
        return b;
    }).map(function(box){
    return box.url;
    });   
    
    
				
		
