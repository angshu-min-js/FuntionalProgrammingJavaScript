//using zip
function() {
return Array.
		zip(videos,
        bookmarks,
        function(a, b){console.log(b);return ({videoId: a.id, bookmarkId: b.id});});

//without zip        
function() {        
for(var counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
  }
  return videoIdAndBookmarkIdPairs;
}
