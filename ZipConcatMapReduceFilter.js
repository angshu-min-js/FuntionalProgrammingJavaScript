function() {
return movieLists.concatMap(function(movieList){
    return movieList.videos.concatMap(function(video){
      return Array.zip(
        video.boxarts.reduce(function(a,b){
          if (a.width*a.height<b.width*b.height)
          {return a;}
          else
            return b;
        }),
        video.interestingMoments.filter(function(inter){
          return inter.type==='Middle';}),
        function(b,i){
          return {id: video.id, title: video.title, time: i.time, url: b.url};
          
      
      }); 
        
    });
  
  });
}
