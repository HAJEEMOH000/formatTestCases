/*The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
*/

function sleepIn(weekday, vacation) {
    if (weekday === true) {
        return false
    } else if (weekday === false && vacation === true) {
        return true
    } else {
        return true
    }
}

console.log(sleepIn(false, false)) // → true
console.log(sleepIn(true, false)) // → false
console.log(sleepIn(false, true)) // → true


//BETTER SOLUTION 
function sleepIn1(weekday, vacation) {
    if((!weekday)||(vacation)) {
        return true
    }
    return false
}

/*
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
*/
function diff21(n) {
    if (n <= 21) {
        return 21 - n
    } else {
        return (n - 21) * 2
    }
}

console.log(diff21(19)) //→ 2
console.log(diff21(10)) //→ 11
console.log(diff21(21)) //→ 0



//Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
function nearHundred(n) {
    if (Math.abs(100-n <= 10) || Math.abs(200-n <= 10)) {
        return true
}
    return false
}

console.log(nearHundred(93)) // → true
console.log(nearHundred(90)) //→ true
console.log(nearHundred(89)) //→ false
console.log(nearHundred(190)) //→ true


//Given a non-empty string and an int n, return a new string where the char at index n has been removed. 
//The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
function missingChar(empty, n) {
    let newString = empty.slice(0,n) + empty.slice(n + 1)
    return newString
}

console.log(missingChar("kitten", 1)) // → "ktten"
console.log(missingChar("kitten", 0)) // → "itten"
console.log(missingChar("kitten", 4)) // → "kittn"


/*
Given a string, take the last char and return a new string with the last char added at the front and back, 
so "cat" yields "tcatt". The original string will be length 1 or more.
*/
function backAround(str) {
    let char = str.at(-1);
    let newStr = char + str + char;
    return newStr;
}
console.log(backAround("cat")) // → "tcatt"
console.log(backAround("Hello")) // → "oHelloo"
console.log(backAround("a")) // → "aaa"


//Given a string, return true if the string starts with "hi" and false otherwise.

function startHi(str) {
    return str.startsWith('hi')
}
console.log(startHi("hi there")) //  → true
console.log(startHi("hi")) // → true
console.log(startHi("hello hi")) //  → false
console.log(startHi("h")) //  → false


//We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
//Given 3 int values, return true if 1 or more of them are teen.
function hasTeen(num1, num2, num3) {
    return ((num1 <= 19 || num1 >= 13) || (num2 <= 19 || num2 >= 13) || (num3 <= 19 || num3 >= 13))
}
console.log(hasTeen(13, 20, 10)) // → true
console.log(hasTeen(20, 19, 10)) // → true
console.log(hasTeen(20, 10, 13)) // → true


//Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.
function mixStart(string) {
    return (string[1] === 'i' && string[2] === 'x');
}

console.log(mixStart("mix snacks")) // → true
console.log(mixStart("pix snacks")) // → true
console.log(mixStart("piz snacks")) // → false


//Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. 
//Note that Math.abs(n) returns the absolute value of a number.
function close10(num1, num2) {
    let num1diff = (Math.abs(num1 - 10))
    let num2diff = (Math.abs(num2 - 10))
    if (num1diff === num2diff) {
        return 0;
    } else if (num1diff > num2diff) {
        return num2;
    }
        return num1;
}

console.log(close10(8, 13)) // → 8
console.log(close10(13, 8)) // → 8
console.log(close10(13, 7)) // → 0



//Return true if the given string contains between 1 and 3 'e' chars.
function stringE(str) {
    let finder = str.split('e').length - 1;
    return (finder <= 3 && finder >= 1)
}
console.log(stringE("Hello")) // → true
console.log(stringE("Heelle")) // → true
console.log(stringE("Heelele")) // → false


//Return true if the given string contains between 1 and 3 'e' chars. (SAME WAY AS ABOVE BUT WITH REGEX)
function stringE(str) {
    let finder = (str.match(/e/g) || []).length; //str.match(/e/g) finds all occurrences of ‘e’ in the string.
    return (finder <= 3 && finder >= 1)  //|| [] ensures that if match() returns null (when no ‘e’ is found), an empty array is used instead.
}
console.log(stringE("Hello")) // → true
console.log(stringE("Heelle")) // → true
console.log(stringE("Heelele")) // → false


//Given a non-empty string and an int N, return the string made starting with char 0, 
// and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
function everyNth(str, n) {
    let newStr = "";
    for (let i = 0; i < str.length; i += n) { 
        newStr += str[i]; // adds each character it loops through (i += n in the for loop jumps over n)
    }
    return newStr
}

console.log(everyNth("Miracle", 2)) // → "Mrce"
console.log(everyNth("abcdefg", 2)) // → "aceg"
console.log(everyNth("abcdefg", 3)) // → "adg"


//We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. 
// We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
function monkeyTrouble(aSmile, bSmile) {
    if (aSmile && bSmile || !aSmile && !bSmile) { 
    return true
}   return false
}
console.log(monkeyTrouble(true, true))   //→ true
console.log(monkeyTrouble(false, false)) // → true
console.log(monkeyTrouble(true, false))  //→ false
console.log(monkeyTrouble(false, true))  //→ false


//We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. 
//We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
function parrotTrouble(talking, hour) {
    if (!talking) {
        return false
    } else (talking && (hour <= 7 || hour >= 20))
        return true
}

console.log(parrotTrouble(true, 6)) // → true
console.log(parrotTrouble(true, 7)) // → false
console.log(parrotTrouble(false, 6)) // → false


function parrotTrouble(talking, hour) {
    return (talking && (hour <= 7 || hour >= 20)) //WITHOUT IF ELSE STATEMENT
}

console.log(parrotTrouble(true, 6)) // → true
console.log(parrotTrouble(true, 7)) // → false
console.log(parrotTrouble(false, 6)) // → false



//Given 2 int values, return true if one is negative and one is positive. 
//Except if the parameter "negative" is true, then return true only if both are negative.
function posNeg(num1, num2, negative) {
    if ((num1 >= 0 && num2 < 0) || (num2 >= 0 && num1 < 0)) {
        return true
    } else if ((negative == true) && (num1 < 0 && num2 < 0)) {
        return true
    } else {
        return false
    }
}

console.log(posNeg(1, -1, false)) // → true		
console.log(posNeg(-1, 1, false)) // → true	
console.log(posNeg(-4, -5, true)) // → true	
console.log(posNeg(-4, -5, false)) // → false
console.log(posNeg(-4, 5, false)) // → true	
console.log(posNeg(-4, 5, true)) // → false	    FAILS	
console.log(posNeg(1, 1, false)) // → false		
console.log(posNeg(-1, -1, false)) // → false		
console.log(posNeg(1, -1, true)) // → false		FAILS
console.log(posNeg(-1, 1, true)) // → false	    FAILS
console.log(posNeg(1, 1, true)) // → false		
console.log(posNeg(-1, -1, true)) // → true	
console.log(posNeg(5, -5, false)) // → true	
console.log(posNeg(-6, 6, false)) // → true	
console.log(posNeg(-5, -6, false)) // → false		
console.log(posNeg(-2, -1, false)) // → false		
console.log(posNeg(1, 2, false)) // → false	
console.log(posNeg(-5, 6, true)) // → false	    FAILS
console.log(posNeg(-5, -5, true)) // → true



//Given a string, return a new string where the first and last chars have been exchanged.
function frontBack(str) {
    let first = str[0]
    let middle = str.slice(1,-1)
    let last = str.at(-1)
    return (str.length > 1) ? `${last}${middle}${first}` : `${str}`
}
console.log(frontBack("code")) // → "eodc"	
console.log(frontBack("a")) // → "a"
console.log(frontBack("ab")) // → "ba"
console.log(frontBack("abc")) // → "cba"
console.log(frontBack("")) // → ""		
console.log(frontBack("Chocolate")) // → "ehocolatC"
console.log(frontBack("aavJ")) // → "Java"	
console.log(frontBack("hello")) //"oellh"


//Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod
const or35 = num => (num % 3 === 0 || num % 5 === 0)

console.log(or35(8)); // → false	false	OK
console.log(or35(15)); // → true	true	OK
console.log(or35(5)); // → true	true	OK
console.log(or35(9)); // → true	true	OK
console.log(or35(4)); // → false	false	OK
console.log(or35(7)); // → false	false	OK
console.log(or35(6)); // → true	true	OK
console.log(or35(17)); // → false	false	OK
console.log(or35(18)); // → true	true	OK
console.log(or35(29)); // → false	false	OK
console.log(or35(20)); // → true	true	OK
console.log(or35(21)); // → true	true	OK
console.log(or35(22)); // → false	false	OK
console.log(or35(45)); // → true	true	OK
console.log(or35(99)); // → true	true	OK
console.log(or35(100)); // → true	true	OK
console.log(or35(101)); // → false	false	OK
console.log(or35(121)); // → false	false	OK
console.log(or35(122)); // → false	false	OK

// Given two temperatures, return true if one is less than 0 and the other is greater than 100.


console.log(icyHot(120, -1)); // → true
console.log(icyHot(-1, 120)); // → true
console.log(icyHot(2, 120)); // → false


// Given a string and an index, return a string length 2 starting at the given index. 
// If the index is too big or too small to define a string length 2, use the first 2 chars. 
// The string length will be at least 2.

const twoChar = (str,ind) => {
    let secondChar = ind + 1
    if ( ind >= str.length - 1) {
        return str.slice(0,2)
    } else {
        return str[ind] + str[secondChar]
    }
}

console.log(twoChar("java", 0)); // → "ja"
console.log(twoChar("java", 2)); // → "va"
console.log(twoChar("java", 3)); // → "ja"


// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".
const lastTwo = str => str.slice(0, -2) + str.at(-1) + str.at(-2);

console.log(lastTwo("coding")); // → "codign"
console.log(lastTwo("cat")); // → "cta"
console.log(lastTwo("ab")); // → "ba"



// Given a string, return a version without the first 2 chars. 
// Except keep the first char if it is 'a' and keep the second char if it is 'b'. 
// The string may be any length. Harder than it looks.
const deFront = str => {
    if (str[0] !== 'a' && str[1] !== 'b') {
        return str.slice(2)
    } else if (str[0] === 'a' && str[1] === 'b') {
        return str[0] + str[1] + str.slice(2)
    } else if (str[0] === 'a') {
        return str[0] + str.slice(2)
    } else (str[1] === 'b') 
        return str[1] + str.slice(2)
}

console.log(deFront("Hello")); // → "llo"
console.log(deFront("java")); // → "va"
console.log(deFront("away")); // → "aay"
console.log(deFront("dbit")); // → "bit"


// Given two temperatures, return true if one is less than 0 and the other is greater than 100.
const icyHot = (temp1, temp2) => ((temp1 < 0 || temp2 < 0) && (temp1 > 100 || temp2 > 100))


console.log(icyHot(120, -1)); // → true
console.log(icyHot(-1, 120)); // → true
console.log(icyHot(2, 120)); // → false


// We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
// Given 2 int values, return true if one or the other is teen, but not both.
const loneTeen = (num1, num2) => {
    let aTeen = (num1 >= 13 && num1 <= 19)
    let bTeen = (num2 >= 13 && num2 <= 19)
    return ((aTeen && !bTeen) || (!aTeen && bTeen))
}

console.log(loneTeen(13, 99)); // → true
console.log(loneTeen(21, 19)); // → true
console.log(loneTeen(13, 13)); // → false


// Given a string, return a string made of the first 2 chars (if present), 
// however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".
const startOz = (str) => {
    if (str.startsWith('oz')) {
        return str[0] + str[1]
    } else if (str.startsWith('o')) {
        return str[0]
    } else if (str[1] === 'z') {
        return str[1]
    }
    return ""
}
console.log(startOz("bzoo")); // → "z"	"z"	
console.log(startOz("oxx")); // → "o"	"o"	
console.log(startOz("oz")); // → "oz"	"oz"

// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.
const in3050 = (num1, num2) => (((num1 >= 30 && num2 <= 40) && (num2 >= 30 && num2 <= 40)) || ((num1 >= 40 && num2 <= 50) && (num2 >= 40 && num2 <= 50)))

console.log(in3050(30, 31)); // → true
console.log(in3050(30, 41)); // → false
console.log(in3050(40, 50)); // → true


// Given two non-negative int values, return true if they have the same last digit, 
// such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.
const lastDigit = (num1, num2) => ((num1 % 10) === (num2 % 10))

console.log(lastDigit(7, 17)); // → true
console.log(lastDigit(6, 17)); // → false
console.log(lastDigit(3, 113)); // → true

// Given two int values, return their sum. Unless the two values are the same, then return double their sum.
const sumDouble = (num1, num2) => (num1 !== num2) ? num1 + num2 : (num1 + num2) * 2

console.log(sumDouble(1, 2)); // → 3
console.log(sumDouble(3, 2)); // → 5
console.log(sumDouble(2, 2)); // → 8

// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
const makes10 = (num1, num2) => ((num1 === 10 || num2 === 10) || (num1 + num2 === 10))

console.log(makes10(9, 10)); // → true
console.log(makes10(9, 9)); // → false
console.log(makes10(1, 9)); // → true

// Given a string, return a new string where "not " has been added to the front. 
// However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.
const notString = string => {
    let splitted = string.split(' ')
    if (splitted[0] === 'not') {
        return string
    } else {
        return `not ${string}`
    }
}

console.log(notString("candy")); // → "not candy"
console.log(notString("x")); // → "not x"
console.log(notString("not bad")); // → "not bad"

//Given a string, we'll say that the front is the first 3 chars of the string. 
//If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
const front3 = string => {
    let front3 = string.slice(0,3)
    return front3 + front3 + front3
}

console.log(front3("Java")); // → "JavJavJav"
console.log(front3("Chocolate")); // → "ChoChoCho"
console.log(front3("abc")); // → "abcabcabc"

//Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, 
//so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.
const front22 = string => {
    let first2Chars = string.slice(0,2)
    return (`${first2Chars}${string}${first2Chars}`)
}

console.log(front22("kitten")); // → "kikittenki"
console.log(front22("Ha")); // → "HaHaHa"
console.log(front22("abc")); // → "ababcab"

//Given 2 int values, return true if either of them is in the range 10..20 inclusive.
const in1020 = (num1, num2) => ((num1 >= 10 && num1 <= 20) || (num2 >= 10 && num2 <= 20))

console.log(in1020(12, 99)); // → true
console.log(in1020(21, 12)); // → true
console.log(in1020(8, 99)); // → false

//Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted.
// Otherwise, return the string unchanged.
const delDel = string => string.slice(1,4) === 'del' ? string.replace('del', '') : string

console.log(delDel("adelbc")); // → "abc"
console.log(delDel("adelHello")); // → "aHello"
console.log(delDel("adedbc")); // → "adedbc"


// Given three int values, a b c, return the largest.
const intMax = (num1, num2, num3) => Math.max(num1, num2, num3)

console.log(intMax(1, 2, 3)); // → 3
console.log(intMax(1, 3, 2)); // → 3
console.log(intMax(3, 2, 1)); // → 3

// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.
const max1020 = (num1, num2) => (num1 >= 10 && num1 <= 20) || (num2 >= 10 && num2 <= 20) ? Math.max(num1, num2) : 0

console.log(max1020(11, 19)); // → 19
console.log(max1020(19, 11)); // → 19
console.log(max1020(11, 9)); // → 11
console.log(max1020(17, 16)); // → 17


//Given a string, return a new string where the last 3 chars are now in upper case. 
//If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.
const endUp = str => {
    if (str.length >= 3) {
        let last3 = str.slice(-3).toUpperCase()
        let front = str.slice(0, -3)
        return front + last3
    } else {
        return str.toUpperCase()
    }
}

console.log(endUp("Hello")); // → "HeLLO"
console.log(endUp("hi there")); // → "hi thERE"
console.log(endUp("hi")); // → "HI"

//Given a string and a non-negative int n, return a larger string that is n copies of the original string.
const stringTimes = (str, num) => {
    let empty = '';
    for (let i = 0; i < num; i++) {
        empty += str
    }
    return empty
}

const stringTimes1 = (str, num) => str.repeat(num) // SIMILAR WAY BUT YOU CAN USE .REPEAT METHOD WHICH RETURNS NEW STRING MULTIPLE NUMBER OF TIMES

console.log(stringTimes("Hi", 2)); // → "HiHi"
console.log(stringTimes("Hi", 3)); // → "HiHiHi"
console.log(stringTimes("Hi", 1)); // → "Hi"

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".
const doubleX = str => {
    let firstX = str.indexOf('x')
    return (str[firstX + 1] === 'x') 
}

console.log(doubleX("axxbb")); // → true
console.log(doubleX("axaxax")); // → false
console.log(doubleX("xxxxx")); // → true

// Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).
const last2 = str => {
    let last2 = str.slice(-2)
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] == last2[0] && str[i+1] == last2[1]){
        count += 1
        }
    }
    return count
}

console.log(last2("hixxhi")); // → 1
console.log(last2("xaxxaxaxx")); // → 1
console.log(last2("axxxaaxx")); // → 2

// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
const array123 = arr => arr.join().includes([1,2,3]) 


console.log(array123([1, 1, 2, 3, 1])); // → true
console.log(array123([1, 1, 2, 4, 1])); // → false
console.log(array123([1, 1, 2, 1, 2, 3])); // → true

// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".
const altPairs = str => {
    let newStr = ''
    for (let i = 0; i < str.length; i += 4) {
        newStr += str[i] //adds first character 
        if (i + 1 < str.length) {
            newStr += str[i + 1] //adds second character if it exists
        }
    }
    return newStr
}

console.log(altPairs("kitten")); // → "kien"
console.log(altPairs("Chocolate")); // → "Chole"
console.log(altPairs("CodingHorror")); // → "Congrr"

// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. 
// Return true if the array does not contain any triples.
const noTriples = arr => {
    for (let i = 0; i < arr.length - 3; i++) {
        if ((arr[i] == arr[i + 1] && arr[i + 2] == arr[i])) {
            return false
        }
    }
    return true
    
}

console.log(noTriples([1, 1, 2, 2, 1])); // → true
console.log(noTriples([1, 1, 2, 2, 2, 1])); // → false
console.log(noTriples([1, 1, 1, 2, 2, 2, 1])); // → false

// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, 
// or whatever is there if the string is less than length 3. Return n copies of the front;
const frontTimes = string => {
    
}

console.log(frontTimes("Chocolate", 2)); // → "ChoCho"
console.log(frontTimes("Chocolate", 3)); // → "ChoChoCho"
console.log(frontTimes("Abc", 3)); // → "AbcAbcAbc"