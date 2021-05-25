// Using what we've learned about loops and conditionals, solve this classic coding challenge (it's been a favorite in interviews for years).

// Write code that will go through each number from 1 to 100 and:

//     For each number that is a multiple of 3, print "Fizz"
//     For each number that is a multiple of 5, print "Buzz"
//     For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
//     All other numbers should just print normally

// 1. A for loop that counts up
// 2. Mod by 3 set variable
// 3. Mod by 5 set variable2
// if both print fizzbuzz
// if 3 print fizz
// if 5 print buzz
// if none print number

for (var i = 1; i <= 100; i++) {
    var threetempCheck = i % 3 == 0;
    var fivetempCheck = i % 5 == 0;
    var bothTempCheck = i % 5 == 0 && i % 3 == 0;
    if (bothTempCheck == true) {
        console.log("Fizzbuzz " + (i));
    } else if (i % 3 == 0) {
        console.log("Fizz " + (i))
    } else if (i % 5 == 0) {
        console.log("Buzz " + (i))
    } else {
        console.log(i)
    }
}
    //console.log(bothTempCheck)
