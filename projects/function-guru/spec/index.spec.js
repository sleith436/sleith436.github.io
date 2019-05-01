// const
//     sinon = require('sinon'),
//     path = '../function-guru';

describe("Function Guru", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });

    // const functions = require(path);

    describe('objectValues()', function() {
      it('Should take an object and return its values in an array', function() {
        var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
        var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
        assert.deepEqual(objectValues(objectOne), ["one","two","crayons","dangle"]);
        assert.deepEqual(objectValues(objectTwo), ["three","four","ponies","dingle"]);
      });
    });

    describe('keysToString()', function() {
      it('Should take an object and return all its keys in a string each separated with a space', function() {
        var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
        var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
        assert.equal(keysToString(objectOne), "a b ponies dingle");
        assert.equal(keysToString(objectTwo), "c d crayons dangle");
      });
    });

    describe('valuesToString()', function() {
      it('Should take an object and return all its string values in a string each separated with a space', function() {
        var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
        var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
        assert.equal(valuesToString(objectOne), "one two crayons dangle");
        assert.equal(valuesToString(objectTwo), "three four ponies dingle");
      });
    });

    describe('arrayOrObject()', function() {
      it('Should take one argument and return \'array\' if its an array and \'object\' if it is an object', function() {
        assert.equal(arrayOrObject({a:"one"}), "object");
        assert.equal(arrayOrObject([1,2,{}]), "array");
      });
    });

    describe('capitalizeWord()', function() {
      it('Should take a string of one word, and return the word with its first letter capitalized', function() {
        assert.equal( capitalizeWord("greg"), "Greg");
        assert.equal( capitalizeWord("pumpkin"), "Pumpkin");
        assert.equal( capitalizeWord("quattuordecillion"), "Quattuordecillion");
      });
    });

    describe('capitalizeAllWords()', function() {
      it('Should take a string of words and return a string with all the words capitalized', function() {
        assert.equal( capitalizeAllWords("one two three four"), "One Two Three Four");
        assert.equal( capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally");
      });
    });

    describe('welcomeMessage()', function() {
      it('Should take an object with a name property and return \'Welcome <Name>!\'', function() {
        assert.equal( welcomeMessage({name: "bert"}), "Welcome Bert!");
        assert.equal( welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
      });
    });

    describe('profileInfo()', function() {
      it('Should take an object with a name an a species and return \'<Name> is a <Species>\'', function() {
        assert.equal( profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
        assert.equal( profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
      });
    });

    describe('maybeNoises()', function() {
      it('Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return \'there are no noises\'', function() {
        assert.equal( maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
        assert.equal( maybeNoises({noises: []}), "there are no noises");
        assert.equal( maybeNoises({}), "there are no noises");
      });
    });

    describe('hasWord()', function() {
      it('Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.', function() {
        var data = "This is a super awesome string of words";
        assert.strictEqual( hasWord(data, "awesome"), true);
        assert.strictEqual( hasWord(data, "words"), true);
        assert.strictEqual( hasWord(data, "turtle"), false);
      });
    });

    describe('addFriend()', function() {
      it('Should take a name and an object and add the name to the object\'s friends array then return the object', function() {
        assert.deepEqual( addFriend("lester", {friends:[]}), {friends:["lester"]});
        assert.deepEqual( addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
      });
    });

    describe('isFriend()', function() {
      it('Should take a name and an object and return true if <name> is a friend of <object> and false otherwise', function() {
        assert.equal( isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
        assert.equal( isFriend("ralf",{friends:["bobby", "ralf"]}), true);
        assert.equal( isFriend("chuck",{}), false);
      });
    });

    describe('nonFriends()', function() {
      it('Should take a name and a list of people, and return a list of all the names that <name> is not friends with', function() {
        var data = [
          {name: "Jimmy", friends:["Sara", "Liza"]},
          {name: "Bob", friends:[]},
          {name: "Liza", friends: ["Jimmy"]},
          {name: "Sara", friends: ["Jimmy"]}
        ];
        assert.deepEqual( nonFriends("Jimmy", data), ["Bob"]);
        assert.deepEqual( nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
        assert.deepEqual( nonFriends("Sara", data), ["Bob","Liza"]);
      });
    });

    describe('updateObject()', function() {
      it('Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.', function() {
        var data = {a: "one", b: "two", "hokey": false};
        assert.deepEqual( updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
        var data = {a: "one", b: "two", "hokey": false};
        assert.deepEqual( updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
        var data = {a: "one", b: "two", "hokey": false};
        assert.deepEqual( updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
      });
    });

    describe('removeProperties()', function() {
      it('Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>', function() {
        var data =
        {a: "one", b: "two", "hokey": false};
         removeProperties(data, ["a","hokey"]);
        assert.deepEqual(data, {b: "two"});

        var data =
        {a: "one", b: "two", "hokey": false};
         removeProperties(data, ["b"])
        assert.deepEqual(data, {a: "one", "hokey": false});

        var data =
        {a: "one", b: "two", hokey: false};
         removeProperties(data, []);
        assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
      });
    });

    describe('dedup()', function() {
      it('Should take an array and return an array with all the duplicates removed', function() {
        var dataOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
        assert.deepEqual( dedup(dataOne), [1,2,3,4,5,"a","b","c"]);
        
        var dataTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
        assert.deepEqual( dedup(dataTwo), ["hello", "world"]);
      });
    });
});
