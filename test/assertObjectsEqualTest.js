const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({a:1,b:3},{b:3,a:1})
assertObjectsEqual({a:1,b:3},{b:3,a:15})