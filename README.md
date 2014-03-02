kindof
======

kindof, can, dnaof - inheritance made easy

Ever struggled with prototype inheritance? Ever wandered why examples of inheritance do not show inheritance deeper than one level? Want it quick, easy and painless?

kindof() -- creates a new kind (you might want to call it a class or a type)
.can. -- assign a new ability to a kind (method, function)
dnaof() -- call the ancestor method (aka the inherited or super)

======

EXAMPLE

OUTPUT

bob can chat
alice can chat, alice can talk
candy can chat, candy can talk, candy can discuss
bzzzz.z.z.z... (alice)
bzzzz.z.z.z... (bob)
bzzzz.z.z.z... (candy)

CODE

require('./kindof')

// create a kind of an idiot without an ancestor:

var idiot = kindof()

// tell what it can do:

idiot.can.say = function() { return this.name + ' can chat' }
idiot.can.rest = function() { console.log('bzzzz.z.z.z... (' + this.name + ')') }

// new kind of smart inherits from a kind of idiot

var smart = kindof(idiot)

// he can also say something:

smart.can.say = function() {
	// he can say something new, and he can say the same thing that an idiot can:
	return dnaof(this, 'say') + ', ' + this.name + ' can talk'
}

// a kind of genious can do the same things as an idiot and smart can, and even more:

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

alice.rest(), bob.rest(), candy.rest()

