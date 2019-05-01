//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for(var key in object){
        arr.push(object[key]);
    }
    return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
for(var key in object){
    arr.push(key);
    }
   return arr.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
 for(var key in object){
   if (typeof object[key] === "string"){
       arr.push(object[key]);
    }
  }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true){
        return "array";
    }
    else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var arr = string.split("");
    arr[0] = arr[0].toUpperCase();
    string = arr.join("");
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(" ");
    var ans = [];
for(var i = 0; i < arr.length; i++) {
    ans.push(capitalizeWord(arr[i]));
}
  return ans.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name;
    return "Welcome " + capitalizeWord(name) +"!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = capitalizeWord(object.name);
    var species = capitalizeWord(object.species);
    return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var str = "";
    if (Array.isArray(object.noises) === true && object.noises.length > 0) {
           str = object.noises.join(" ");
    }
    else {
        str = "there are no noises";
    }
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arr = string.split(" ");
    var ans = false;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === word) {
        ans = true;
        }
    }
    return ans;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var ans = false;
if(object.friends === undefined){
    ans = false;
} else{
    for(var i = 0; i < object.friends.length; i++){
        if(object.friends[i] === name){
            ans = true;
        }
    }
}
    return ans;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var notFriends = [];
    var friends = [];
    var boolean = false;
    for(var i = 0; i < array.length; i++){
        if(array[i].name === name){
            friends = array[i].friends;
        }
    }
    
    for(var i = 0; i < array.length; i++){
        boolean = false;
        for(var j = 0; j < friends.length; j++){
            if(friends[j] === array[i].name){
                boolean = true;
            } 
            
        }
        if(boolean === false && array[i].name !== name){
            notFriends.push(array[i].name);
        }
    }

        return notFriends;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    
 return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        var key = array[i];
        delete object[key];
        }
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var seen = {};
    var res = [];
    var a  = 0;
    for(var i = 0; i < array.length; i++){
        var item = array[i];
        if(seen[item] !== 1){
            seen[item] = 1;
        res[a++] = item;
    }

}
return res;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}