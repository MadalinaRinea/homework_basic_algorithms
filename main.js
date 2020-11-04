//  1. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}


// 2. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0];
    }
    if (strokes <= par - 2) {
        return names[1];
    }
    if (strokes === par - 1) {
        return names[2];
    }
    if (strokes === par) {
        return names[3];
    }
    if (strokes === par + 1) {
        return names[4];
    }
    if (strokes === par + 2) {
        return names[5];
    }
    if (strokes >= par + 3) {
        return names[6];
    }
}


// 3. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--
            break;
    }

    return `${count} ${count > 0 ? 'Bet' : 'Hold'}`
}



// 4. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    const person = contacts.find(contact => contact.firstName === name);

    if (!person) {
        return 'No such contact';
    }
    return person.hasOwnProperty(prop) ? person[prop] : 'No such property';
}



//  5. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(object, id, prop, value) {
    if (prop !== 'tracks' && value) {
        object[id][prop] = value;
    }
    if (prop === 'tracks' && !object[id].tracks) {
        object[id].tracks = [value];
    }
    if (prop === 'tracks' && value) {
        object[id].tracks.push(value);
    }
    if (value === '') {
        delete object[id][prop];
    }
    return object;
}



//  6. Convert Celsius to Fahrenheit
function convertToF(celsius) {
    return (celsius * (9 / 5) + 32)
}



//  7. Reverse a String
function reverseString(str) {
    str = str.split('').reverse().join('')
    return str;
}


//  8. Factorialize a Number
function factorialize(num) {
    if (num === 0) {
      return 1
    }
    for(let i = num - 1; i >0 ; i--) {
      num = num * i
    }
    return num;
}


//  9. Find the Longest Word in a String
function findLongestWordLength(str) {
    const newArr = str.split(' ').map(word => word.length);
    let longest = 0;
    for(const word of newArr) {
      if(word > longest) {
        longest = word;
      }
    }
    return longest;
}



// 10. Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
      let largest = arr[i][0];
      for(let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] > largest) {
          largest = arr[i][j];
        }
      }
      newArr.push(largest)
    }
    return newArr;
}



//  11. Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let res = '';
    if(num > 0) {
      for(let i = 0; i < num; i++) {
        res += str
      }
    }
    return res;
}


// 12. Title Case a Sentence
function titleCase(str) {
    const newStr = str.toLowerCase().split(' ');

    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }

    return newStr.join(' ');
}
  


// 13. Slice and Splice
function frankenSplice(arr1, arr2, n) {

    const newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    return newArr;
}
  


// 14. Where do I Belong
function getIndexToIns(arr, num) {

    arr.push(num);
    arr.sort((a, b) => a - b);

    return arr.indexOf(num);
}




// 15. https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {

    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}


