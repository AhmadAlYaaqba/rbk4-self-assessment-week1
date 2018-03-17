var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        //return this._storage[hashFn(key, max)];
        var index = hashFn(key, max);
        var bucket = this._storage[index];
        if (bucket !== undefined){
          for (var i = 0 ; i < bucket.length ; i++){
            if (bucket[i][0] === key)
              return bucket[i][1];
          }
          return "nothing matching your key"
        }
        else {
          return undefined ;
        }
        
      },

      insert: function(key, value) {
        //your code is here
        var buk = this._storage[hashFn(key, max)];
        if (buk === undefined){
          var arr = [] ;
          arr.push([key,value])
          this._storage[hashFn(key, max)] = arr ;
        }
        else {
          for (var i = 0 ; i < buk.length ; i++){
            if (buk[i][0] === key){
              buk[i][1] = value;
              return this._storage[hashFn(key, max)] = buk;
            }
          }
          buk.push([key,value])
          this._storage[hashFn(key, max)] = buk;
        }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};