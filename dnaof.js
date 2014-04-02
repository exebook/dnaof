kindof = function(Y, init) {
	var key = {}
	var e = '"dnaof" kinds must be instantiated with .create()'
	function X (pass) {
		//console.log(X.caller == kindof)
		if ((X.caller != kindof) && (pass != key)) 
		error_kindof_must_be_instantiated_with_create.error()
	}
	if (Y != undefined) Y.close(), X.prototype = new Y//Y.create()
	X.can = []
	if (init != undefined) X.can.init = init
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
	X.createProto = function() {
		this.close()
		return new this(key)
	}
	X.prototype.inherit = function(f, newf) { // this allows to inherit on instances
		var tmp = this[f]
		this[f] = newf
		this[f].dna = tmp
	}
	X.prototype.dna = function() {
		return this.dna.caller.dna.apply(this, [].slice.apply(arguments).slice(1))
	}
	return X
}

dnaof = function(x) {
	var ret = dnaof.caller.dna.apply(x, [].slice.apply(arguments).slice(1))
	return ret
}

