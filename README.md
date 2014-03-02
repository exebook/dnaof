kindof
======

kindof, can, dnaof - inheritance made easy

Ever struggled with prototype inheritance? Ever wandered why examples of inheritance do not show inheritance deeper than one level? Want it quick, easy and painless?

`kindof()` -- creates a new kind (you might want to call it a class or a type)

`.can.` -- assign a new ability to a kind (method, function)

`dnaof()` -- call the ancestor method (aka the inherited or super)

======

### EXAMPLE

Demonstrate creation of kinds, creating and calling both overloaded and not overloaded methods.

### OUTPUT

```text
bob can chat
alice can chat, alice can talk
candy can chat, candy can talk, candy can discuss
bzzzz.z.z.z... (alice)
bzzzz.z.z.z... (bob)
bzzzz.z.z.z... (candy)
```

### CODE

```javascript
require('./kindof')

// Create a kind of an idiot without an ancestor:

var idiot = kindof()

// Tell what it can do:

idiot.can.say = function() { return this.name + ' can chat' }
idiot.can.rest = function() { console.log('bzzzz.z.z.z... (' + this.name + ')') }

// New kind of smart inherits from a kind of idiot

var smart = kindof(idiot)

// He can also say something:

smart.can.say = function() {
	// He can say something new, and he can
	//    say the same thing that an idiot can:
	return dnaof(this, 'say') + ', ' + this.name + ' can talk'
}

// A kind of genious can do the same things as
//    an idiot and smart can, and even more:

var genious = kindof(smart)
genious.can.say = function() {
	return dnaof(this, 'say') + ', ' + this.name + ' can discuss'
}

// instantiate three persons:

var bob = new idiot
var alice = new smart
var candy = new genious

// Assign properties, because to make life simpler
//    we do not initialize anything during creation
//    yes, we separate creation from feeding and teaching:

bob.name = 'bob'
alice.name = 'alice'
candy.name = 'candy'

// Let them talk:

console.log(bob.say())
console.log(alice.say())
console.log(candy.say())

// Let them take some rest:

alice.rest(), bob.rest(), candy.rest()
```
