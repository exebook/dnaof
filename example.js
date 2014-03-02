
require('./kindof')

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
	return dnaof(this, 'say') + ', ' + this.name + ' can talk'
}

// a kind of a genious can do the same things as an idiot and smart can, and even more:

var genious = kindof(smart)
genious.can.say = function() {
	return dnaof(this, 'say') + ', ' + this.name + ' can discuss'
}

// instantiate three persons:

var bob = new idiot
var alice = new smart
var candy = new genious

// assign properties, because to make life simpler we do not initialize anything during creation:

bob.name = 'bob'
alice.name = 'alice'
candy.name = 'candy'

// let them talk:

console.log(bob.say())
console.log(alice.say())
console.log(candy.say())

// let them take some rest:

alice.rest()
bob.rest()
candy.rest()
