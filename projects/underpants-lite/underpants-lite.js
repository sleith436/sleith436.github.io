// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

const _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (v) {
    // YOUR CODE BELOW HERE //
    if(typeof v === 'string'){
        return('string');
    }else if (typeof v === 'number'){
        return('number');
    }else if (typeof v === 'boolean'){
        return('boolean');
    }else if (typeof v === 'function'){
        return('function');
    }else if (typeof v === 'undefined'){
        return('undefined');
    }else{
        if (Array.isArray(v)) {
            return('array');
        } else if (v instanceof Date) {
            return('date');
        } else if (v === null) {
            return('null');
        } else {
            return('object');
        }
    }
};
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    if(_.typeOf(array) !== "array") {
        return [];
    } else if(_.typeOf(number) !== "number"){
        return array[0];
    } else if(number <= array.length) {
        var ans = [];
        for(var i = 0; i < number; i++){
            ans.push(array[i]);
        }
        return ans;
    } else {
        return array;
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    if(_.typeOf(array) !== "array") {
        return [];
    } else if(_.typeOf(number) !== "number"){
        return array[array.length-1];
    }else if(number > array.length){
        return array;
    }else if( number >= 0) {
        var arr = [];
        for(var i = number-1; i < array.length; i++){
            arr.push(array[i]);
        } 
        return arr;
    } else if( number < 0){
        return [];
    } 
    return array;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    var result = -1;
    for(var i = 0; i < array.length; i++){
        if(array[i] === value){
            result = i;
            break;
        }
    }
    return result;

};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    var index = _.indexOf(array, value);
    if(index === -1){
        return false;
    }
    return true;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, fn){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
       fn(collection[i], i, collection);
     }
     }else {
         for(var key in collection){
             fn(collection[key], key, collection);
         }
     }
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, fn){
    var arr = [];
    _.each(array, function(elt, loc, coll){
        if(fn(elt, loc, coll)){
            arr.push(elt);
        }
    });
    return arr;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, fn){
    var arr = [];
    _.each(collection, function(elt, loc, coll){
        arr.push(fn(elt, loc, coll));
    });
    return arr;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(arr, func){
  _.filter(arr, func);
 var ans = [];
    _.each(arr, function(elt, loc, coll){
        if(func(elt, loc, coll) === false){
            ans.push(elt);
        }
    });
    return ans;
 
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr, func){
var trueArray = [];
trueArray = _.filter(arr, func);
var falseArray = [];
falseArray = _.reject(arr, func);

var bothArrays = [trueArray, falseArray];

return bothArrays;

};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    if(!func){
        var ans = true;
        _.each(collection, function(val){
            if(!val){
                ans = false;
            }
        });
        return ans;
    }else{
        var ans = true;
        _.each(collection, function(elt, loc, col){
            if(!func(elt, loc, col)){
                ans = false;
            }
        });
    }
    return ans;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
   var ans = false;
    if(!func){
        _.each(collection, function(val){
            if(!val){
                ans = false;
            }else{
                ans = true;
            }
        });
        return ans;
    }else{
        _.each(collection, function(value, loc, col){
            if(func(value, loc, col)){
                ans = true;
            }
        });
    }
    return ans;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arr, prop){
var ans = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i].hasOwnProperty(prop)){
        ans.push(arr[i][prop]);
    }
}
return ans;

    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
