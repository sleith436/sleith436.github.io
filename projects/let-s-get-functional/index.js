// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
const _ = require('lodown-sleith436');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    var ans = _.filter(array, function(person){
        return person.gender === 'male';
    });
    
    return ans.length;
};

var femaleCount = function(array){
    var ans = _.filter(array, function(person){
        return person.gender === 'female';
    });
    
    return ans.length;
};

var oldestCustomer = function(array){
    var oldest; 
    var cust;
    for(var i = 0; i < array.length; i++){
        if(i == 0){
            oldest = array[i].name;
            cust = i;
        }else if(array[i].age > array[cust].age){
                oldest = array[i].name;
                cust = i;
            }
    }
    return oldest;
};

var youngestCustomer = function(array){
    var youngest; 
    var cust;
    for(var i = 0; i < array.length; i++){
        if(i == 0){
            youngest = array[i].name;
            cust = i;
        }else if(array[i].age < array[cust].age){
                youngest = array[i].name;
                cust = i;
            }
    }
    return youngest;
};

var averageBalance = function(array){
    var total = 0;
    for(let i = 0; i < array.length; i++){
        var temp = array[i].balance;
        temp = temp.slice(0,0) + temp[1] + temp.slice(3,temp.length);
        var num = Number(temp);
        total += num;
    }
    return (total/array.length);
};

var firstLetterCount = function(array, letter){
    var ans = 0;
    var arr = [];
    for(var i = 0; i < array.length; i++){
        arr = array[i].name.split("");
        if(arr[0].toUpperCase() === letter.toUpperCase()){
            ans ++;
        }
    }
    return ans;
};

var friendFirstLetterCount = function(array, customer, letter){
    var arr = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].name === customer){
            arr = array[i].friends;
        }
    }
    return firstLetterCount(arr, letter);
};

var friendsCount = function(array, name){
    var ans = [];
        for(var i = 0; i < array.length; i++){
           for(var j = 0; j < array[i].friends.length; j ++){
               if(array[i].friends[j].name === name){
                   ans.push(array[i].name);
               }
           }
        }
return ans;
};


var topThreeTags = function(array){
    var arr = _.pluck(array, "tags");
    var tagCounts = {};
    var topTags = [];
    for(var i = 0; i < arr.length; i++){
        var tags = arr[i];
        
        for (var j = 0; j < tags.length; j++) {
            var tag = tags[j];
            
            if(tagCounts[tag] === undefined){
                tagCounts[tag] = 1;
            } else {
                tagCounts[tag]++;
            }
        }
    }
    
    
    // tagCounts = { 'a' : 1, "b": 5, "c":2 }
    
    /* 
    look through tagCounts Object for the highest count and add it to topTags
    reset the tagCount of that tag to 0
    
    repeat 2 more times
    
    */
    var tagOne = 0;
    var tagOneName = '';
    var tagTwo = 0;
    var tagTwoName = '';
    var tagThree = 0;
    var tagThreeName = '';
   for(var key in tagCounts){
       var cur = tagCounts[key];
       if(cur >= tagOne){
           tagThree = tagTwo;
           tagThreeName = tagTwoName;
           tagTwo = tagOne;
           tagTwoName = tagOneName;
           tagOne = cur;
           tagOneName = key;
       }else if( cur >= tagTwo){
           tagThree = tagTwo;
           tagThreeName = tagTwoName;
           tagTwo = cur;
           tagTwoName = key;
       }else if( cur >= tagThree){
           tagThree = cur;
           tagThreeName = key;
       }
   } 
   
//   for (var i = 0; i < 3; i++) {
//       for (var key in tagCounts) {
//           var tagOne = 0;
//           var tagOneName = '';
//           var cur = tagCounts[key];
//           if (cur >= tagOne) {
//               tagOne = cur;
//               tagOneName = key;
//           }
//       }
//       topTags.push(tagOneName);
//       topTags[tagOneName] = -1;
//   }
    topTags.push(tagOneName);
    topTags.push(tagTwoName);
    topTags.push(tagThreeName);
    return topTags;
    
};

var genderCount = function(array){
   var genders = {
       male: 0,
       female: 0,
       transgender: 0,
   };
   for(var i = 0; i < array.length; i++){
       if(array[i].gender === "male"){
           genders.male++;
       }else if(array[i].gender === 'female'){
           genders.female++;
       }else{
           genders.transgender++;
       }
   }
   return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
