kindof = function(K) {
	function X() {}
	if (K != undefined) X.prototype = new K
	X.can = X.prototype
	return X
}
dnaof = function(x, f) {
	var p = x.__proto__
	x.__proto__ = p.__proto__
	var r = p.__proto__[f].apply(x)
	x.__proto__ = p
	return r
}
