/** 
 * Create a static getter method. 
 * @param {Object} the object to return from the generated getter
 * @returns {Function} a getter method
 */
var bar = function(s) {
	return function() {
		return s;
	}
};