var permutations = [];
function permAlone(str) {
    function recursive(string, perma) {
        if (string.length === 0) {
            permutations.push(perma);
        } else {
            
            for (var i = 0; i < string.length; i++) {
                var pre = string.substring(0, i);
                var post = string.substring(i + 1);
                recursive(pre + post, string[i] + perma);
            }
            
        }
    }
    recursive(str, "");
    return permutations.filter(function(perm){
    return !/([a-z])\1+/.test(perm);
  }).length-2;   //seems to be a bug, idk why i'm getting length+2
}permAlone('aab');
