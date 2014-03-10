require('./dnaof')

// create a kind of idiot without ancestor:

var idiot = kindof()
// tell what it can do:

idiot.can.say = function() { return this.name + ' can chat' }
idiot.can.rest = function() { console.log('bzzzz.z.z.z... (' + this.name + ')') }

// a new kind of smart inherits from a kind of idiot

var smart = kindof(idiot)

// he can also say something:

smart.can.say = function() {
	// he can say something new, and he can say the same thing as an idiot can:
	return dnaof(this) + ' and talk'
}

// a kind of a genious can do the same things as an idiot and smart can, and even more:

var genious = kindof(smart)
genious.can.init = function(name) { this.name = name }
genious.can.say = function() {
	return dnaof(this) + ' and even discuss'
}

var boss = kindof(genious)

// instantiate three persons:

var alice = idiot.create()
var betty = smart.create()
var carol = genious.create('Carol')
var diana = boss.create('Diana')

alice.name = 'Alice'
betty.name = 'Betty'

// let them talk:

console.log(alice.say())
console.log(betty.say())
console.log(carol.say())
console.log(diana.say())

// let them take some rest:

alice.rest(), betty.rest(), carol.rest(), diana.say()

var eden = new genious // error, must use genious.create() instead
