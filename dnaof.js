kindof = function(Y) {
	function X () {}
	if (Y != undefined) Y.close(), X.prototype = new Y
	X.can = []
	X.close = function() {
		if (this.closed === true) return
		this.closed = true
		for (var i in this.can) {
			var dna = this.prototype[i];
			this.prototype[i] = this.can[i]
			if (dna !== undefined) this.prototype[i].dna = dna
		}
	}
	X.create = function() {
		this.close()
		var $ = new this
		if ($.init != undefined) $.init.apply($, arguments)
		return $
	}
	return X
}

dnaof = function(x) {
	return dnaof.caller.dna.apply(x, [].slice.apply(arguments).slice(1))
}

