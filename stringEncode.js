/*
given a string with repeated consecutive characters, return the amount of each character as such:


input: "aaabbbbcdd"

output: "a3b4c1d2"



*/


function encode(str) {
// set output to an empty string
    let output = ""
    // print out each letter from the string
    let object = {}

    for (let i = 0; i < str.length; i++) {
        if(str[i] in object) { // if the current char is a key in our object, then increment the value by 1.
            object[str[i]] += 1
        }else {
            // if the current key does not exist in the object, create a key representing the current character and set the value to equal to 1.
            object[str[i]] = 1
        }
    }
    // loop through the object and add to the output the key and values from the object.
    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
        output += key + object[key]
    }
    return output
}


console.log(encode("aaabbbbcdd"))