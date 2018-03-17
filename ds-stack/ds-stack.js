var Stack = function() {
    this._storage = {};
    this._counter = 0;
    this.add = function(value){
      // write me
      this._storage[counter] = value ;
      this._counter++;
    };
    this.remove = function() {
      // write me
      var deletedValue = this._storage[counter];
      delete this._storage[counter] ;
      counter--;
      return deletedValue;
    };
  };