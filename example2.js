require('./dnaof')

var t0 = kindof()
t0.can.f1 = function() { return('0') } // [1----]
t0.can.f2 = function() { return('0') } // [11111]
t0.can.f3 = function() { return('0') } // [11---]
t0.can.f4 = function() { return('0') } // [1--11]
t0.can.f5 = function() { return('0') } // [1-1-1]

var t1 = kindof(t0)
t1.can.f2 = function() { return dnaof(this) + ' 1' }
t1.can.f3 = function() { return dnaof(this) + ' 1' }

var t2 = kindof(t1)
t2.can.f2 = function() { return dnaof(this) + ' 2' }
t2.can.f5 = function() { return dnaof(this) + ' 2' }

var t3 = kindof(t2)
t3.can.f2 = function() { return dnaof(this) + ' 3' }
t3.can.f4 = function() { return dnaof(this) + ' 3' }

var t4 = kindof(t3)
t4.can.f2 = function() { return dnaof(this) + ' 4' }
t4.can.f4 = function() { return dnaof(this) + ' 4' }
t4.can.f5 = function() { return dnaof(this) + ' 4' }

var o = t4.create()
console.log(o.f1()) // 0
console.log(o.f2()) // 0 1 2 3 4
console.log(o.f3()) // 0 1
console.log(o.f4()) // 0 3 4
console.log(o.f5()) // 0 2 4
