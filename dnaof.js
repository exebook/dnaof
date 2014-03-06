kindof = function(Y) {
	var key = {}
	var e = '"dnaof" kinds must be instantiated with .create()'
	function X (pass) { if (pass != key) throw e }
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
		var $ = new this(key)
		if ($.init != undefined) $.init.apply($, arguments)
		return $
	}
	X.prototype.inherit = function(f, newf) { // this allows to inherit on instances
		var tmp = this[f]
		this[f] = newf
		this[f].dna = tmp
	}
	return X
}

dnaof = function(x) {
	return dnaof.caller.dna.apply(x, [].slice.apply(arguments).slice(1))
}

