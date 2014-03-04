dnaof
======

kindof(), .can., dnaof() - inheritance made easy

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

// you must use .create(), not "new"

var alice = idiot.create()
var betty = smart.create()
var carol = genious.create('Carol')

alice.name = 'Alice'
betty.name = 'Betty'

// let them talk:

console.log(alice.say())
console.log(betty.say())
console.log(carol.say())

// let them take some rest:

alice.rest(), betty.rest(), carol.rest()

```
