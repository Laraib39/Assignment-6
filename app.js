//Assignment: 21-25
//--Task 1--
// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName + lastName;
// alert("Welcome " + fullName);

//--Task 2--
// var favMobModel = prompt("Please enter your favourite mobile phone model");
// var lengthOfInput = favMobModel.length;
// document.write("My favourite phone is: " + favMobModel);
// document.write("<br>" + "Length of string: " + lengthOfInput);

//--Task 3--
// var nationality = "Pakistani";
// var index = nationality.indexOf("n");
// document.write("String: " + nationality);
// document.write("<br>" + "Index of 'n' : " + index);

//--Task 4--
// var greet = "Hello World";
// var index = greet.lastIndexOf("l");
// document.write("String: " + greet);
// document.write("<br>" + "Last index of 'l' : " + index);

//--Task 5--
// var nationality = "Pakistani";
// var charIndex = nationality.charAt(3);
// document.write("String: " + nationality);
// document.write("<br>" + "Character at index 3: " + charIndex);

//--Task 6--
// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName.concat(lastName);
// alert("Welcome " + fullName);

//--Task 7--
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city);
// document.write("<br>" + "After replacement: " + newCity);

//--Task 8--
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("Original text: " + "<br>" + message);
// document.write("<br>" + "After replacement: " + "<br>" + newMessage);

//--Task 9--
// var str = "472";
// var num = Number(str);
// document.write("Value: " + str + "<br>" + "Type: string");
// document.write("<br>" + "Value: " + num + "<br>" + "Type: number") 

//--Task 10--
// var input = prompt("Please enter any text:");
// var convert = input.toUpperCase();
// document.write("User input: " + input + "<br>");
// document.write("Upper case: " + convert);

//--Task 11--
// var userInput = prompt("Please enter any text:");
// var upper = userInput.charAt(0).toUpperCase();
// var convert = (upper + userInput.slice(1,userInput.length));
// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + convert); 

//--Task 12--
// var num = 35.36;
// var str = Number(num) * 100;
// document.write("Number: " + num + "<br>");
// document.write("Result: " + str);

//--Task 13--
// var userName = prompt("Please enter username:");
// for(var i = 0; i < userName.length; i++){
//     if(userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 ||
//        userName.charCodeAt(i) == 46 ||  userName.charCodeAt(i) == 64){
//         alert("Please enter a valid username");
//     }
// }

//--Task 14--
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// input = input.toLowerCase();
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//      if(A.indexOf(input) !== -1){
//         document.write(input + " is <b>available</b> at index " + A.indexOf(input) + " in our bakery" + "<br>" );
//     }
//     else {
//         document.write("We are sorry. " + input + " is <b> not available</b> in our bakery" + "<br>" );
//     }


//--Task 15--
// var password = prompt("Enter password containing alphabets and numbers:");
// document.write("Entered Password: " + password + "<br>");
// if(password.charCodeAt() >= 48 && password.charCodeAt() <= 57){
//     document.write("Password can not begin with a number" + "<br>");
//     if(password.length < 6 || password.length > 6){
//         document.write("Please enter a valid password");
//     }
// }

//--Task 16--
// var university = "University of Karachi";
// var A = university.split("");
// for(var i = 0; i < university.length; i++){
//     document.write(A[i] + "<br>");
// }

//--Task 17--
// var userInput = prompt("Please enter any text:");
// var last = userInput.charAt(userInput.length-1);
// document.write("User input: " + userInput + "<br>");
// document.write("Last character of input: " + last);

//--Task 18--
// var str = "the quick brown fox jumps over the lazy dog";
// var count =(str.match(/the/g)).length;
// document.write("Text: The quick brown fox jumps over the lazy dog" + "<br>");
// document.write("There are " + count + " occurrences of word 'the'");

//--CHAPTER 26-30--

//--Task 1--
// var num = +prompt("Enter a positive number (may contain decimals) :");
// document.write("number: " + num +"<br>");
// var rounded = Math.round(num);
// document.write("round off value: " + rounded + "<br>");
// var floored = Math.floor(num);
// document.write("floor value: " + floored + "<br>");
// var ceiled = Math.ceil(num);
// document.write("ceil value: " + ceiled + "<br>");

//--Task 2--
// var numb = +prompt("Enter a negative floating point number:");
// document.write("number: " + numb +"<br>");
// var rounded = Math.round(numb);
// document.write("round off value: " + rounded + "<br>");
// var floored = Math.floor(numb);
// document.write("floor value: " + floored + "<br>");
// var ceiled = Math.ceil(numb);
// document.write("ceil value: " + ceiled + "<br>");

//--Task 3--
// var numInput = +prompt("Enter the number to display its absolute value:");
// var abs = Math.sqrt(numInput*numInput);
// document.write("The absolute value of " + numInput + " is " + abs);

//--Task 4--
// var rand = Math.random();
// var dice = Math.round(rand * 6);
// document.write("random dice value: " + dice + "<br>"); 
// document.write("random dice value: " + (dice + 2)); 

//--Task 5--
// var head = Math.random();
// var toss = Math.ceil(head * 2);
// if (toss === 2) {
//     document.write(toss + "<br>" + "random coin value: Heads" + "<br>");
// }
// else {
//     document.write(toss + "<br>" + "random coin value: Tails" + "<br>");
// }

//--Task 6--
// var randomNum = Math.random();
// var generate = Math.round(randomNum *4);
// document.write("random number between 1 and 100: " + (generate + 80));

//--Task 7--
// var input = prompt("Please enter your weight: ");
// var parsed = parseFloat(input);
// document.write("The weight of user is " + parsed + " kilograms");

//--Task 8--
// var enterNum = +prompt("Enter a number between 1 and 10:");
// var secretNum = (Math.random() * 3) + 5;
// var hiddenNum = Math.floor(secretNum);
// document.write(hiddenNum);
// if (enterNum === hiddenNum){
//     alert("Congratulaions! Your number matches the secret number");
// }
// else{
//     alert("Try again!");
// }

//--CHAPTER 31-34--

//--Task 1--
// var currentDate = new Date();
// document.write(currentDate);

//--Task 2--
// var months = ["January","February","March","April","May","June","July","August","September",
// "October","November","December"];
// var now = new Date();
// var thisMonth = now.getMonth();
// var showMonth = months[thisMonth];
// document.write("Current month: " + showMonth);

//--Task 3--
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var thisDay = now.getDay();
// var showDay = days[thisDay];
// document.write("Today is " + showDay);

//--Task 4--
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var thisDay = now.getDay();
// var showDay = days[thisDay];
// if(thisDay === 0 || thisDay === 6){
//     document.write("It's Fun day");
// }

//--Task 5--
// var now = new Date();
// var thisDate = now.getDate();
// if(thisDate >= 1 && thisDate < 16){
// document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//--Task 6--
// var now = new Date();
// document.write("Current Date: " + now + "<br>");
// var milli = now.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milli + "<br>");
// var mins = milli * 60 * 60;
// document.write("Elapsed minutes since January 1, 1970: " + mins);

//--Tsak 7--
// var now = new Date();
// var hours = now.getHours();
// if(hours < 12){
//     document.write("Its AM");
// }
// else{
//     document.write("Its PM");
// }

//--Task 8--
// var laterDate = new Date("Thu Dec 31 2020");
// document.write("Later Date: " + laterDate);

//--Task 9 -- 
// var past = new Date("April 25, 2020");
// var pastMilli = past.getTime();
// var today = new Date("June 20, 2020");
// var todayMilli = today.getTime();
// var diff = todayMilli - pastMilli;
// var timePassed = Math.floor(diff /(1000*60*60*24));
// document.write(timePassed + " days have passed since 1st Ramadan, 2020");

//--Task 10--  
// var refDate = new Date("Dec 05, 2015 22:50:16");
// var refMilli = refDate.getTime();
// var beginDate = new Date("Jan 01, 2015");
// var beginMilli = beginDate.getTime();
// var diff = refMilli - beginMilli;
// var tillReference = Math.floor(diff/ (1000 * 60));
// document.write("On reference date " + refDate + "<br>");
// document.write(tillReference + " seconds had passed since beginning of 2015");

//--Task 11-- 
// var today = new Date();
// document.write("current date: " + today + "<br>");
// var time = new Date();
// var getTim = time.setHours(time.getHours()-1);
// document.write("1 hour ago, it was " + time);

//--Task 12--
// var today = new Date();
// document.write("current date: " + today + "<br>");
// var time = new Date();
// var getTim = time.setFullYear(time.getFullYear()-100);
// document.write("100 years back, it was " + time);

//--Task 13--
// var inputAge = +prompt("Please enter your age: ");
// var now = new Date();
// var currentYear = now.getFullYear();
// var yearOfBirth = currentYear - inputAge;
// document.write("Your age is " + inputAge + "<br>" + "Your birth year is " + yearOfBirth);

//--Task 14--
// document.write("<h2><b>K-Electric Bill</b></h2>");
// var months = ["January","February","March","April","May","June","July","August","September",
// "October","November","December"];
// var today = new Date();
// var noOfUnits = 410;
// var chargePerUnit = 16;
// var netAmount =  noOfUnits * chargePerUnit;
// document.write("Customer Name: " + "<b>ABC Customer</b>");
// document.write("<br>" + "Month: " + "<b>" + months[today.getMonth()] + "</b>");
// document.write("<br>" + "Number of units: " + "<b> 410 </b>");
// document.write("<br>" + "Charges per unit: " + "<b> 16 </b>");
// document.write("<br>");
// document.write("<br>" + "Net Amount Payable (within Due Date): " + "<b>" + netAmount + "</b>");
// document.write("<br>" + "Late payment surcharge: <b> 350 </b>");
// document.write("<br>" + "Gross Amount Payable (after Due Date): " + "<b>" + (netAmount + 350) + "</b>");

//--CHAPTER 35-38--

//--Task 1--
// function currentDate(){
//     var today = new Date();
//     return today;
// }
// document.write(currentDate());

//--Task 2--
// function greet(fName, lName){
//     var fullName = fName + lName;
//     return fullName;
// }
// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// alert("Welome " + greet(firstName,lastName));

//--Task 3--
// function add(num1,num2){
//     var addition = num1 + num2;
//     return addition;
// }
// var firstNum = +prompt("Please Enter first number for addition:");
// var secondNum = +prompt("Please Enter second number for addition:");
// alert("Addition of two given numbers is: " + add(firstNum,secondNum));

//--Task 4--
// function calculate(num1,op,num2){
//     if(op === '+'){
//         return num1 + num2;
//     }
//     else if(op === '-'){
//         return num1 - num2;
//     }
//     else if(op === '*'){
//         return num1 * num2;
//     }
//     else if(op === '/'){
//         return num1 / num2;
//     }
//     else if(op === '%'){
//         return num1 % num2;
//     }
// }
// document.write("The two numbers used are 5 and 5" + "<br>");
// var output1 = calculate(5, '+' , 5);
// document.write("<br>" +"The result of addition is: " + output1);
// var output2 = calculate(5, '-' , 5);
// document.write("<br>" + "The result of subtraction is: " + output2);
// var output3 = calculate(5, '*' , 5);
// document.write("<br>" + "The result of multiplication is: " + output3);
// var output4 = calculate(5, '/' , 5);
// document.write("<br>" + "The result of division is: " + output4);
// var output5 = calculate(5, '%' , 5);
// document.write("<br>" + "The result of modulus operation is: " + output5);

//--Task 5--
// function square(numb){
//     var squaring = numb * numb;
//     return squaring;
// }
// var input = +prompt("Please enter a number to display its square:");
// document.write("The number after squaring is: " + square(input));

//--Task 6--
// function factorial(num){
//         if(num === 0){
//             return 1;
//         }
//     return num * factorial(num - 1);
// }
// var input = +prompt("Enter number to generate its factorial:");
// document.write(factorial(input));

//--Task 7--
// function counting(start,end){
//     for(var i = start; i <= end; i++){
//         document.write(i + "<br>");
//     }
// }
// var inp1 = +prompt("Please enter number 1:");
// var inp2 = +prompt("Please enter number 2:");
// counting(inp1,inp2);

//--Task 8--
// function calculateHypotenuse(base,perp){
//     var hypo = calculateSquare(base,perp);
//     function calculateSquare(x,y){
//         var b = x * x;
//         var p = y * y; 
//         return b + p;
//     }
//     return hypo;
// }
// var result = calculateHypotenuse(3,4);
// document.write("The Hypotenuse of a right angled triangle is: " + result);

//--Task 9--
// function areaOfRect(width, height){
//     return width * height;
// }
// var result = areaOfRect(3,5);
// document.write("Area of rectangle as per given values, is: " + result);

//--Task 10--
// function palindrome(str){
//     var check = " ";
//     for(var i = str.length - 1; i >= 0; i--){
//         check += str[i];
//     }
//     if(check === str){
//         return ;
//     }
//     return check;
// }
// var input  = prompt("Enter a word to check:");
// var result = palindrome(input);
// document.write(result + " is a palindrome word");

//--Task 11-- 
// function convert(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//     }
   
// var result = convert("the quick brown fox");
// document.write(result);

//--Task 12--  
// function checkWord(str){
//     var arr = str.match(/\w[a-z]{0,}/g);
//     var longest = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(longest.length < arr[i].length){
//            longest = arr[i];
//         }
//     }
//     return longest;
// }
// document.write(checkWord("Web Development Tutorial"));

//--Task 13--
// function countLetter(str,letter){
//     var count = 0;
//     for(var i = 0; i < str.length;){
//         if(str.charAt(i) === letter){
//             count += 1;
//         }
//         i++;
//     }
//     return count;
// }
// var result = countLetter('JSResourceS.com','o');
// document.write("The given letter occurred " + result + " times in given string.");

//--Task 14--
function calcCircumference(radius){
    var circum = 2 * 3.147 * radius;
    document.write("The circumference is " + circum); 
}
function calcArea(radius){
    var area = 3.147 * radius * radius;
    document.write("<br>" + "The area is " + area);
}
calcCircumference(5);
calcArea(5);