// // *********************** Chapter 21 - 25 **********************


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Greetings " + fullName);

// var model = prompt("Enter your fav mobile model")
// var length = model.length;
// document.write("My fav phone is: " + model + ". Length of string is: " + length);

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("<br><br> String: " + word + "<br> Index of 'n': " + index);

// var word2 = "Hello World";
// var index = word2.lastIndexOf("l");
// document.write("<br><br> String: " + word2 + "<br> Index of 'l': " + index);


// var word3 = "Pakistani";
// var char = word3.charAt(3);
// document.write("<br><br> String: " + word3 + "<br> Character at index 3: " + char);


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// alert("Hello! " + fullName);


// var city = "Hyderabad";
// var city2 = city.replace("Hyder", "Islam");
// document.write("<br><br> City: " + city + "<br> After replacement: " + city2)

// var message = "Ezan and Hassan are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("<br><br> " + newMessage);


// var str = "472";
// document.write("<br><br>Value: " + str + "<br>Type: " + typeof (str));
// var num = parseInt(str);
// document.write("<br><br>Value: " + num + "<br>Type: " + typeof (num));



// var input = prompt("Enter any word to change in uppercase");
// var changed = input.toUpperCase();
// document.write("<br><br>User input: " + input + "<br>Upper case: " + changed);


// var input = prompt("Enter any word to change in titlecase");
// var firstWord = input.charAt(0).toUpperCase();
// var remaining = input.slice(1);
// var titleCase = firstWord.concat(remaining);
// document.write("<br><br>User input: " + input + "<br>Title case: " + titleCase);


// var num = 35.36;
// var numInString = num.toString();
// var removed = numInString.replace(".", "");
// document.write("<br><br>Number: " + num + "<br>Result: " + removed);


// var userName = prompt("Enter Username");
// var flag = false;
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
//         alert("Please enter a valid username");
//         flag = true;
//     }
// }
// if (!flag) {
//     alert("Entered username is valid")
// }



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userOrder = prompt("Welcome to ABC bakery! Which item you want to purchase?");
// var check = false;
// for (var i = 0; i < A.length; i++) {
//     if (userOrder.toLowerCase() == A[i]) {
//         alert(userOrder + " is available at index " + i + "in our bakery");
//         check = true;
//         break;

//     }
// }
// if (!check) {
//     alert("Item not found");
// }




// var password = prompt("Enter your password");
// var num = false; var alph = false;
// document.write("<br><br>Entered password: " + password);


// if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     document.write("<br>Password cannot begin with a number");
//     document.write("<br>Plz enter a valid password")
// }
// else if (password.length < 6) {
//     document.write("<br>Password length cannot be less than 6");
//     document.write("<br>Plz enter a valid password");

// }
// else {
//     for (var i = 1; i < password.length; i++) {
//         if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//             num = true;
//             break;
//         }
//     }
//     for (var i = 1; i < password.length; i++) {
//         if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {

//             alph = true;
//             break;
//         }
//     }
//     if (num && alph) {
//         document.write("<br>Valid Password");

//     }
//     else {
//         document.write("<br>Invalid Password");
//     }
// }



// document.write("<br><br>");
// var university = "University of Karachi";
// var split = university.split(" ");
// for (var i = 0; i < split.length; i++) {
//     document.write(split[i] + "<br>");

// }


// var userInput = prompt("Enter any word to display it's last character");
// var lastChar = userInput.slice(userInput.length - 1);
// document.write("<br><br>user input: " + userInput + "<br>Lasr character of input: " + lastChar);


// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var j = 0; j < sentence.length; j++) {
//     if (sentence.slice(j, j + 3).toLowerCase() === "the")
//         count++;
// }
// document.write("<br><br>Text: " + sentence + "<br>There are " + count + " occurrence(s) of word 'the'");




// // *********************** Chapter 26 - 30 **********************


// var input = +prompt("Enter any positive integer");
// document.write("number:" + input);
// document.write("<br>round off value: " + Math.round(input));
// document.write("<br>floor value: " + Math.floor(input));
// document.write("<br>ceil value: " + Math.ceil(input));

// var input2 = +prompt("Enter any negative integer");
// document.write("<br><br>number:" + input2);
// document.write("<br>round off value: " + Math.round(input2));
// document.write("<br>floor value: " + Math.floor(input2));
// document.write("<br>ceil value: " + Math.ceil(input2));

// var abs = +prompt("Enter number to find absolute");
// document.write("<br><br>The absolute value of " + abs + " is " + Math.abs(abs));

// var dice = Math.random();
// var numbr = (dice * 6) + 1;
// var round = Math.floor(numbr);
// document.write("<br><br> Random number" + round);

// var coin = Math.random();
// var coinNum = (coin * 2) + 1;
// var roundCoin = Math.floor(coinNum);
// if (roundCoin == 1)
//     document.write("<br><br> " + roundCoin + " <br>Random coin value:Heads");
// else
//     document.write("<br><br> " + roundCoin + " <br>Random coin value:Tails");


// var num = Math.random();
// var hund = (num * 100) + 1;
// var round = Math.floor(hund);
// document.write("<br><br> Random number between 1 and 100:" + round);

// var weight = prompt("Enter your weight");
// var convert = parseFloat(weight);
// document.write("<br>Your Weight is " + convert + " kilograms");


// var secret = Math.random();
// var numbr = (secret * 10) + 1;
// var round = Math.floor(numbr);
// var userInput = +prompt("Enter number");
// if (round == userInput) {
//     document.write("<br><br>Congratulations! you enter correct number");

// }
// else {
//     document.write("<br><br>Please try again");
// }



// //  ***************************** Chapter 31 - 34 ***************************


// var current = new Date();
// document.write(current);


// var months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
// var currentMonth = current.getMonth();
// document.write("<br><br>Current Month: " + months[currentMonth]);


// var days = ["Sun", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = current.getDay();
// document.write("<br><br>Today is " + days[currentDay]);


// if (currentDay == 0 || currentDay == 6)
//     document.write("<br><br>Today is fun day");
// else
//     document.write("<br><br>Today is working day");
// }


// if (current.getDate() <= 15) {
//     document.write("<br><br>First fifteen days oif the month");
// }
// else {
//     document.write("<br><br>Last days of the month");
// }



// document.write("<br><br>Current Date: " + current);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + current.getTime());
// document.write("<br>Elapsed minutes since January 1, 1970: " + (current.getTime() / (1000 * 60 * 60)));




// if (current.getHours < 12) {
//     document.write("<br><br>It's AM");
// }
// else
//     document.write("<br><br>It's PM");



// var later = new Date(2020, 11, 31);
// document.write("<br><br>Later date: " + later);

// var ramadan = new Date(2015, 5, 18);
// var totalMill = current.getTime() - ramadan.getTime();
// document.write("<br><br>" + (totalMill / (1000 * 60 * 60 * 24)));


// var start = new Date(2015, 0, 1);
// var refDate = new Date(2015, 11, 5, 22, 16, 54);
// document.write("<br><br>On reference date:" + refDate + " " + (refDate.getTime() - start.getTime()) + "seconds have passed since beginning of 2015");


// var current = new Date();
// var ahead = new Date();
// ahead.setHours(current.getHours() - 1);
// document.write("<br><br>current date: " + current + " 1 hour ago, it was " + ahead);


// var back = new Date();
// back.setFullYear(current.getFullYear() - 100);
// alert("current date: " + current + " 100 years back, it was " + back);


// var age = +prompt("Enter your age");
// var birth = new Date();
// birth.setFullYear(birth.getFullYear() - age);
// document.write("<br><br>Your age is " + age + "<br>Your birth year is " + birth.getFullYear());


// var customer = prompt("Enter customer name");
// var month = new Date();
// var units = +prompt("Enter number of units");
// var charges = +prompt("Enter charges per unit");
// var surcharge = +prompt("Enter late payment surcharge")


// document.write("<br><br><h1>K-Electric Bill</h1><br><br>Customer Name: <b>" + customer + "Customer</b><br>Month: <b>" + months[month.getMonth()] + "</b><br>Number of units: <b>" + units + "</b><br>Charges per unit: <b>" + charges + "</b><br><br>");
// var amount = netAmount(units, charges);
// var gross = grossAmount(amount, surcharge);
// document.write("<br><br>Net Amount Payabe (within Due Date): <b>" + amount + "</b><br>Late payment surcharge: <b>" + surcharge + "</b><br>Gross Amount Payable(after Due Date): <b>" + gross + "</b>");
// function netAmount(units, charges) {
//     var payable = units * charges;
//     return payable;

// }
// function grossAmount(netAmount, surcharge) {
//     var gross = netAmount * surcharge;
//     return gross;
// }



// // ************************** Chapter 35 - 38 ****************************

// function currentDate() {
//     var func = new Date();
//     document.write("<br><br>" + func);
// }
// currentDate();


// function greet() {
//     var first = prompt("Enter First name");
//     var last = prompt("Enter Last name");
//     alert("Hello " + first + " " + last);
// }
// greet();


// var first = +prompt("Enter first number to add");
// var second = +prompt("Enter second number to add");
// var result = add(first, second);
// alert(result);
// function add(first, second) {
//     return first + second;
// }


// var num1 = 7;
// var num2 = 4;
// var operator = "-";
// var ans = calc(num1, num2, operator);
// document.write("<br><br>" + ans);

// function calc(num1, num2, operator) {
//     if (operator == "+") {
//         return num1 + num2;
//     }
//     else if (operator == "-") {
//         return num1 - num2;
//     }
//     else if (operator == "/") {
//         return num1 / num2;
//     }
//     else
//         return "Illegal operator"
// }



// var sq = 4;
// var sqRes = square(sq);
// document.write("<br><br>Square of " + sq + "is " + sqRes);

// function square(sq) {
//     return sq * sq;
// }


// var fact = 5;
// var result = factorial(5);
// document.write("<br><br>Factorial of " + fact + "is " + result);

// function factorial(fact) {
//     var res = 1;
//     for (var i = 1; i <= fact; i++) {
//         res *= i;
//     }
//     return res;
// }


// var start = 1;
// var end = 12;
// counting(start, end);
// document.write("<br><br>");
// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + ",");
//     }
// }


// var base = +prompt("Enter base value");
// var perp = +prompt("Enter perpendicular value");
// calculateHypotenuse(base, perp);


// function calculateHypotenuse(base, perp) {
//     var b = calculateSquare(base);
//     var p = calculateSquare(perp);
//     var h = b + p;
//     document.write("<br><br>hypotenuse<sup>2</sup>: " + h);
// }
// function calculateSquare(abc) {
//     return abc * abc;
// }



// area(3, 5);
// var a = 3;
// var b = 5;
// area(a, b);

// function area(a, b) {
//     document.write("<br><br>Area of Rectangle is: " + a * b)
// }



// var palin = "madam";
// checkPalindrome(palin);
// function checkPalindrome(palin) {
//     var length = palin.length - 1;
//     var check = false;
//     for (var i = 0; i < palin.length / 2; i++) {
//         if (palin.charAt(i) == palin.charAt(length--)) {
//             check = true;
//         }
//         else
//             check = false;
//         break;

//     }
//     if (check) {
//         document.write("<br><br>It is a palindrome");
//     }
//     else
//         document.write("<br><br>Not a palindrome");

// }



// var example = "the quick brown fox";
// upperCase(example);

// function upperCase(example) {
//     var newString = example.charAt(0).toUpperCase();;

//     for (var i = 1; i < example.length; i++) {
//         if (example.charAt(i) == " ") {
//             newString += " ";
//             newString += example.charAt(i + 1).toUpperCase();
//             i++;
//         }
//         else
//             newString += example.charAt(i);
//     }
//     document.write("<br><br>" + newString);
// }



// var line = "Web Development Tutorial";
// longestWord(line);

// function longestWord(line) {
//     var lengthPre = 0;
//     var lengthNew = 0;
//     var word = "";
//     var newWord = "";
//     for (var i = 0; i < line.length; i++) {

//         if (line.charAt(i) == " ") {

//             if (lengthPre < lengthNew)
//                 lengthPre = lengthNew;
//             lengthNew = 0;
//             newWord = word;
//             word = "";
//         }
//         else if (i == --line.length) {
//             word += line.charAt(i);
//             lengthPre = lengthNew;
//             lengthNew = 0;
//             newWord = word;
//             word = "";

//         }
//         else
//             word += line.charAt(i);
//         lengthNew++;
//     }

//     document.write("<br><br>Longest word is " + newWord);
// }




// var occurence = "JSResourceS.com";
// count(occurence, 'o');

// function count(occurence, letter) {
//     var occur = 0;
//     for (var i = 0; i < occurence.length; i++) {
//         if (occurence.charAt(i).toLowerCase() == 'o') {
//             occur++;
//         }
//     }
//     document.write("<br><br>it occurs " + occur + " times")
// }




// var radius = 4;
// calcCircumference(radius);
// calcArea(radius);

// function calcCircumference(radius) {
//     document.write("<br><br>Circumference is " + (2 * 3.142 * radius));
// }


// function calcArea(radius) {
//     document.write("<br><br>Area is " + (3.142 * radius * radius));
// }
