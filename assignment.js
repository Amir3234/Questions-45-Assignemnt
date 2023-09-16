"use strict";
/* Q=2 Personal Message: Store a person’s name in a variable, and print a message
 to that person. Your message should be simple, such as, “Hello Eric, would you like
 to learn some Python today?” */
let personal_message = ("Hello Eric, would you like to learn some python today?");
console.log("Personal message", personal_message);
/* Q=3 Name Cases: Store a person’s name in a variable, and then print that person’s
name in lowercase, uppercase, and titlecase.*/
let personal_name = "Amir Hussain";
let lowerCase = personal_name.toLowerCase();
console.log("Lower case name ", lowerCase);
let upperCase = personal_name.toUpperCase();
console.log("Upper case name", upperCase);
let arry = personal_name.split("");
let titleCaseName = " ";
for (let i = 0; i < arry.length; i++) {
    titleCaseName = titleCaseName + arry[i].charAt(0).toUpperCase() + arry[i].slice(1).toLowerCase() + " ";
}
console.log("Title Case Name", titleCaseName);
/* Q=4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name
of its author. Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.” */
console.log('Franklin D. Roosevelt once said,"The only thing we have to fear is fear itself."');
/* Q=5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable
called famous_person. Then compose your message and store it in a new variable called message.
Print your message. */
let famous_Qout = 'Franklin D. Roosevelt';
let message = ' ${famous_Qout} said,"The only thing we have to fear is fear itself."';
console.log(` ${famous_Qout} said,The only thing we have to fear is fear itself.`);
/* Q=6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces. */
let nam = "\t            Amir Hussain            \n";
console.log("Some Whitespace name", nam);
console.log(nam.trim());
/* Q=7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result
in the number 8. Be sure to enclose your operations in print statements to see the results. */
let addition = 4 + 4;
console.log("Addition Number", addition);
let Subtraction = 16 - 8;
console.log("Subtraction Number", Subtraction);
let multiplication = 4 * 2;
console.log("Multiplication Number", multiplication);
let divison = 64 / 8;
console.log("Divison Number", divison);
/* Q=8 You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line. */
for (let a = 0; a < 4; a++) {
    console.log(5 + 3);
}
/* Q=9 Favorite Number: Store your favorite number in a variable. Then, using that variable,
 create a message that reveals your favorite number. Print that message. */
let favorite_number = 323436;
let num = `favorite number: ${favorite_number}`;
console.log(num);
/* Q=10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point,
 just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does. */
var Name = "Amir Hussain";
var date = "04-09-2023";
console.log(`name ${Name}:Date ${date}`);
console.log("This program shows my name and date");
/* Q=11 Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessingeach element in the list, one at a time. */
let array = ["Ahsan", "Mohsin", "Shahid", "Ali"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
/* Q=12 Greetings: Start with the array you used in Exercise 11, but instead of
just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name. */
let array1 = ["Ahsan", "Mohsin", "Shahid", "Ali"];
for (let i = 0; i < array1.length; i++) {
    console.log(`hello ${array1[i]} i hope you are doing well`);
}
/* Q=13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle
 or a car, and make a list that stores several examples. Use your list to print a series of
 statements about these items, such as “I would like to own a Honda motorcycle.” */
let favoriteTransportation = ["Yamaha YBR", "Honda 125", "Honda Civic", "Toyota Grande"];
for (let i = 0; i < favoriteTransportation.length; i++) {
    console.log(`I would like to own a ${favoriteTransportation[i]}`);
}
/* Q=14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like toinvite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
let guestList = ["Ali", "Ahsan", "Mohsin", "kumail"];
guestList.forEach((invitaion) => {
    console.log(`Mr. ${invitaion} I would like to invite you to attend the dinner.`);
});
/* Q=15 Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.*/
let guestList1 = ["Ali", "Ahsan", "Mohsin", "kumail"];
console.log(guestList1);
let PersonNotComing = ["Mohsin"];
console.log("Person who is not to coming", PersonNotComing);
guestList1.splice(2, 1, "Iqbal");
console.log("Modified Name", guestList1);
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Mr.${guestList1[i]} I am very happy to invite on my dinner`);
}
/* Q=16 More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
let guestList2 = ["Ali", "Ahsan", "Mohsin", "kumail"];
console.log("Guest List", guestList2);
guestList2.unshift("Bilal");
guestList2.splice(guestList2.length / 2, 0, "Ahmad");
guestList2.push("Sohail");
guestList2.forEach((invitation) => (console.log(`Mr.${invitation} I am very happy to invite on my dinner`)));
console.log(guestList2);
/* Q=17 Shrinking Guest List: You just found out that your new dinner table
won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, printa message to that person letting them
know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. */
// Start with your program from Exercise 16
let guestsWhole1 = ["Ali", "Ahsan", "Mohsin", "kumail"];
console.log("Sorry, I can only invite two people for dinner.");
while (guestsWhole1.length > 2) {
    let removedGuest = guestsWhole1.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}
for (let remainingGuest of guestsWhole1)
    ;
/* Q=18 Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
let favoriteLocation = ["America", "United Kingdom", "Pakistan", "Canada", "India"];
console.log("Original order");
console.log(favoriteLocation);
console.log("\n Alphabetical order");
favoriteLocation.sort();
console.log(favoriteLocation);
console.log("Original order");
console.log(favoriteLocation);
console.log("\n Reverse Alphabetical order");
favoriteLocation.sort().reverse();
console.log(favoriteLocation);
console.log("Original order");
console.log(favoriteLocation);
favoriteLocation.reverse();
console.log("Reverse Order", favoriteLocation);
favoriteLocation.sort();
console.log("Original Order", favoriteLocation);
favoriteLocation.reverse();
console.log(favoriteLocation);
/* Q=19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
 the number of people you are inviting to dinner. */
let guestList3 = ["Ali", "Ahsan", "Mohsin", "kumail"];
console.log("No of Guests are invited:", guestList3.length);
/* Q=20 Think of something you could store in a array. For example, you could make a list of mountains, rivers,
 countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items. */
let languages = ["Urdu", "English", "Sindhi", "Punjabi"];
console.log("List of Languages");
for (let l = 0; l < languages.length; l++) {
    console.log(languages[l]);
}
/* Q=21 They think of something you could store in a TypeScript Object. Write a program that creates Objects
 containing these items.*/
let motorcycle = { band: "honda", modelType: "CD 70", year: "2023" };
console.log(motorcycle);
let identification = [{ Name: "Amir", city: "Sahiwal", Province: "Punjab", phone: "03036331153" },
    { Name: "Ali", city: "Sahiwal", Province: "Punjab", phone: "03036331154" },
    { Name: "Ahsan", city: "Sahiwal", Province: "Punjab", phone: "03036331155" }
];
console.log(identification);
/* Q=22 Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. Change an index in one of your programsto produce an index error. Make sure you
  correct the error before closing the program. */
let intentionError = ["Ali", "Ahsan", "Mohsin", "Bilal", "Kumail"];
console.log(`intention Error: ${intentionError[1]}`);
console.log(`intention Error: ${intentionError[3]}`);
/* Q=23 Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
let car = 'subaru';
console.log("is car=='subaru'? is | predict is ture");
console.log(car == 'subaru');
console.log("is car=='honda'? | predict is false");
console.log(car == 'honda');
console.log("is car==='subaru'? | my predict is true");
console.log(car === 'subaru');
console.log("is car==='honda'?| predict is false");
console.log(car === 'subaru');
console.log(" is car !== subaru ?| predict is false");
console.log(car == 'subaru');
console.log("is car !==subaru ? | predict is true");
console.log(car == 'subaru');
/* Q=24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want
to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
  and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
/* Q=25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.) */
let alien_color = "green";
if (alien_color == 'green') {
    console.log("The player just earned 5 point");
}
else {
    console.log("That fails will have no output");
}
/* Q=26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block. */
let alien_color1 = "green";
if (alien_color1 == 'green') {
    console.log("The player just earned 5 point");
}
else {
    console.log("The player just earned 10 points");
}
/* Q=27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
let alienColor2 = 'green';
if (alienColor2 == 'green') {
    console.log("The player earned 5 points");
}
else if (alienColor2 == 'yellow') {
    console.log("The player earned 10 points");
}
else if (alienColor2 == 'red') {
    console.log("The player earned 15 points");
}
else {
    console.log("Blank");
}
/* Q= 28
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
let age = 32;
if (age > 0 && age < 2) {
    console.log("The person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is toddler");
}
else if (age <= 4 && age < 13) {
    console.log("The person is kid");
}
else if (age <= 13 && age < 20) {
    console.log("The person is teenager");
}
else if (age <= 20 && age < 65) {
    console.log("The person is adult");
}
else if (age >= 65) {
    console.log("The person is elder");
}
else {
    console.log("Error");
}
/* Q=29 Favorite Fruit: Make a array of your favorite fruits, and then write
 a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in
your array. If the fruit is in your array, the if block should print a statement,
 such as You really like banana.*/
let fruits = ["banana", "apple", "mango", "dates", "watermelon"];
let favorite_fruits = ["watermelon", "apple", "mango"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits.includes(favorite_fruits[i])) {
        console.log(`you like ${favorite_fruits[i]}`);
    }
}
/* Q=30 Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let helloAdmin = ["admin", "IT officer", "coordinator", "OFA", "Accountant"];
let helloPerson = ["admin"];
for (let i = 0; i < helloAdmin.length; i++) {
    if (helloAdmin.includes(helloPerson[i])) {
        console.log(`Hello: ${helloPerson[i]} Would you like to see a status report`);
    }
    else {
        console.log(`hello:${helloAdmin[i]} Thank you for logging in again`);
    }
}
/* Q=32 Checking Usernames: Do the following to create a program that simulates how websites ensure
 that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames
 are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has,
 print a message that the person will need to enter a new username. If a username has not been used,
 print a message saying that the username is available. */
let current_user = ["Ali", "Ahsan", "Mohsin", "Kumail", "Bilal"];
let new_user = ["Ali", "Ahsan", "Nouman", "Kumail", "Bilal"];
for (let c = 0; c < new_user.length; c++) {
    if (new_user.includes(current_user[c])) {
        console.log(`The person will need to enter a new username`);
    }
    else {
        console.log(`The username is available`);
    }
}
/* Q=33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of num1) {
    let ordinal_num1 = "";
    if (number === 1) {
        ordinal_num1 = "st";
    }
    else if (number === 2) {
        ordinal_num1 = "nd";
    }
    else if (number === 3) {
        ordinal_num1 = "rd";
    }
    else {
        ordinal_num1 = "th";
    }
    console.log(`${number}${ordinal_num1}`);
}
/* Q=34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names
 in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
just the name of the pizza. For each pizza you should have one line of output containing a simple statement
 like I like pepperoni pizza. */
let favoritePizzas = ["Chicken Tikka", "Chicken Supreme", "Crown Crust"];
console.log("My favorite pizzas are:", favoritePizzas);
for (let pizza of favoritePizzas) {
    console.log(`\n I like ${pizza} pizza.`);
}
/* Q=35 Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!*/
let animal = ["Cat", "Dog", "Lion"];
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
animal.forEach((pet) => {
    console.log(`A ${pet} would make a great pet`);
});
console.log("\n Any of these animals would make a great pet");
/* Q=36 T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function. */
function T_Shirt(Size, message) {
    console.log(`Your Shirt is ${Size} : Message on shirt is ${message}`);
}
T_Shirt("Large", "Pakistan Zindabad");
/* Q=37 Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message. */
function shirt(size = "large", message = "I love typecript") {
    console.log(`you order ${size} shirt, message on shirt is ${message}`);
}
shirt();
shirt("medium");
shirt("small", "typecript is difficult language");
/* Q=38 Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country. */
function cityCountry(city, country = "unknown") {
    console.log(`${city} is in ${country}`);
}
cityCountry("Sahiwal", "Pakistan");
cityCountry("Faisalabad", "Pakistan");
cityCountry("United Kingdom");
/* Q=39 City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value
that’s returned. */
function city_Country(city, country) {
    return `${city},${country}`;
}
let a = city_Country("Sahiwal", "Pakistan");
let b = city_Country("New York", "USA");
let c = city_Country("Dheli", "India");
console.log(a);
console.log(b);
console.log(c);
/* Q=40 Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album. */
function make_Album(artist, albumTitle, tracks) {
    let album = {
        Artist: artist,
        AlbumTitle: albumTitle,
    };
    if (tracks !== undefined) {
        album.Tracks = tracks;
    }
    return album;
}
let album10 = make_Album("Artist1", "Album1");
let album20 = make_Album("Artist2", "Album2", 12);
let album30 = make_Album("Artist3", "Album3");
console.log("Album 1:", album10);
console.log("Album 2:", album20);
console.log("Album 3:", album30);
/* Q=41 Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */
function magician(magician_show = ["Ali", "Ahsan", "Amir", "Bilal"]) {
    console.log("Magician Name");
    for (let i = 0; i < magician_show.length; i++) {
        console.log(magician_show[i]);
    }
}
magician();
/* Q=44 Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time. */
function sandwich(...item) {
    console.log("following items of sadwich");
    for (let item1 of item) {
        console.log(`${item1}`);
    }
    console.log("Enjoy your sandwich!");
}
sandwich("Ham", "Cheese", "Lettuce", "Tomato");
sandwich("Turkey", "Swiss Cheese");
sandwich("Tuna Salad");
/* Q=45 Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly */
function createCar(manufacturer, model, options) {
    const carInfo = {
        Manufacturer: manufacturer,
        Model: model,
    };
    Object.assign(carInfo, options);
    return carInfo;
}
const carinfo = createCar("Toyota", "Camry", { color: "Blue", year: 2023, price: 25000 });
console.log(car);
console.log("Coded by: Amir Hussain");
