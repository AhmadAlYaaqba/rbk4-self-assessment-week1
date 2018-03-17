// your code here
Array.prototype.first = function() {
	return this[0];
};
Array.prototype.last = function() {
	var lastIndex = this.length - 1 ;
	return this[lastIndex];
};