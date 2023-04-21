// TASK 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and store the value of 2.5% in it (hint: 2.5% means 0.025). 
// Next, create another variable named "userInput" and take the input from the user using the prompt. 
// Make sure the input value is of a type number by converting the input string to a number using a suitable method.
//  Then, create a variable named "result" and assign its value to the multiplication of the zakat percentage and user input. 
//  Finally, use an alert message to display the calculated zakat value. 
//  The message should look like this: "Your zakat value is xxx".

// const zakatPercentage = 0.025;

// const userInput = Number(prompt("Enter your total Amount"));
// const result = zakatPercentage * userInput;
// alert("Your zakat value is " + result + " PKR");

// _________________________________________________________________________________________________________________________________________________________________________________________________________


// TASK 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family members using the prompt and store the value in a variable called "familyMembers". 
// Next, ask the user to choose a fitrah method by providing them options using the prompt, and store the selected method and its price in variables. 
// Then, use an if-else block to check the user's input and calculate the fitrah amount by multiplying the selected method's price with the number of family members. 
// Finally, display the calculated fitrah amount using an alert message.


// const familyMembers = Number(prompt("Enter Total Number Of Your Family Members:"));

// const method = prompt("Choose a fitrah method: \n1. Wheat (per person) - PKR 300 \n2. Barley (per person) - PKR 800 \n3. Dates (per person) - PKR 2100 \n4. Raisins (per person) - PKR 2800");
// let price;

// // here I Use an if-else to check the user's input and set the price accordingly
// if (method === "1") {
//   price = 300;
// } 
// else if (method === "2") {
//   price = 800;
// } 
// else if (method === "3") {
//   price = 2100;
// }  
// else if (method === "4") {
//     price = 2800;
// } 
// else {
//   alert("Invalid input, please choose a valid fitrah method!");
// }
// const fitrahAmount = price * familyMembers;
// alert("Your fitrah amount is " + fitrahAmount + " PKR");

// _________________________________________________________________________________________________________________________________________________________________________________________________________


// TASK 3:
// Create a program that generates a random number between 1 and 10 and stores it in a variable called "secretNumber". 
// Then, ask the user to enter a guess for the secret number using a prompt. 
// Use an if-else statement to check if the user's guess matches the secret number. 
// If the guess is correct, display a message using an alert saying "Congratulations! You guessed the secret number". 
// Otherwise, if the guess is too high or too low, display an appropriate message informing the user to guess again.

// const secretNumber = Math.floor(Math.random() * 10) + 1;
// const guess = Number(prompt("Please Guess the Secret Number (between 1 and 10):"));

// // if-else statement to check if the user's guess matches the secret number
// if (guess === secretNumber) {
//   alert("Congratulations! You guessed the secret number");
// } 
// else if (guess > secretNumber) {
//    alert("Your guess is too high. Please try again.");
// } else if (guess < secretNumber) {
//  alert("Your guess is too low. Please try again.");
// } 
// else {
//   alert("Please enter a valid guess.");
// }


// _________________________________________________________________________________________________________________________________________________________________________________________________________


// TASK 4:
// Create a program that asks the user to enter a name, and then prints out the name with the first letter capitalized (Make your name in capitalized case).

// const name = prompt("Enter your Name:");

// const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

// alert(" Your name with the first letter capitalized is: " + capitalizedName);


// _________________________________________________________________________________________________________________________________________________________________________________________________________


//TASK 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and "contactNames". 
// Using the prompt, you will ask the user to enter a contact number and contact name. 
// You will then push these values into their respective arrays using the push method. 
// After adding all the contacts, you will display the contact numbers and names in the console.
//  To do this, you will need to use a for loop to iterate through both arrays and log each element to the console. 
// Make sure to use descriptive variable names and comment on your code for clarity.

// here, I Create empty arrays to store contact numbers and names
// let contactNumbers = [];
// let contactNames = [];

// // here I Asked the user to enter contacts until they indicate they are done
// while (true) {
//   let number = prompt("Enter a Contact Number (or 'done' for finish):");
//   if (number === "done") {
//     break;
//   }
//   let name = prompt("Enter the Contact Name:");

//   // here we Add the contact number and name to their respective arrays
//   contactNumbers.push(number);
//   contactNames.push(name);
// }

// // Print out all the contacts in the console
// console.log("Contact Numbers:");
// for (let i = 0; i < contactNumbers.length; i++) {
//   console.log(contactNumbers[i]);
// }

// console.log("Contact Names:");
// for (let i = 0; i < contactNames.length; i++) {
//   console.log(contactNames[i]);
// }


// _________________________________________________________________________________________________________________________________________________________________________________________________________



// TASK 6:
// Create an Array that contains different products, 
// and get input from the user in which you ask your user to give the position of that element he/she wants.
// Now remove that Item from your array and console the removed item, 
// Also display the remaining items in the array and total number of items remaining.

// let products = ["Apple", "Banana", "Carrot", "ladyfinger", "mango"];

// let userInput = prompt("Enter the position of the item you want to remove (1-" + products.length + "):");
// let indexToRemove = parseInt(userInput) - 1;

// if (indexToRemove >= 0 && indexToRemove < products.length) {
//   let removedItem = products.splice(indexToRemove, 1)[0];
//   console.log("Removed item:", removedItem);
//   console.log("Remaining items:", products);
//   console.log("Total number of items remaining:", products.length);
// } else {
//   console.log("Invalid input.");
// }


// _________________________________________________________________________________________________________________________________________________________________________________________________________



// TASK 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt function. The program should then use nested if-else statements to determine if the person is eligible to vote. 
// First, the program should check if the person is Pakistani or Indian. If they are not, the program should display a message saying they are not eligible to vote. 
// If they are Pakistani or Indian, the program should then check their gender. If the person is male and over the age of 18, they are eligible to vote. If the person is female and over the age of 18, the program should ask if they are married. If they are married, they are eligible to vote. If they are not married, they are not eligible to vote. 
// If the person is under 18, the program should display a message saying they are not eligible to vote.

// let nationality = prompt("What is your nationality (Pakistani OR Indian) ?");
// let gender = prompt("What is your gender (Male OR Female) ?");
// let age = parseInt(prompt("What is your age?"));

// if (nationality === "pakistani" || "Pakistani" || nationality === "indian" || "Indian" ) {
//   if (gender === "male" && age >= 18) {
//     console.log("You are eligible to vote.");
//   } 
//   else if (gender === "female" && age >= 18) {
//     let married = prompt("Are you married? (yes or no)");
//     if (married === "yes") {
//       console.log("You are eligible to vote.");
//     } 
//     else {
//       console.log("You are not eligible to vote.");
//     }
//   } 
//   else {
//     console.log("You are not eligible to vote.");
//   }
// } 
// else {
//   console.log("You are not eligible to vote.");
// }


// _________________________________________________________________________________________________________________________________________________________________________________________________________



// Task 8:
// You have an array of that contains the name of  Pakistani Teams Player selected for WorldCup (15 Players) named as WorldCupSquad.
//  Now tomorrow we have a match with India, So make an array of final team players (11 Players) that will be playing in tomorrows match from the WorldCupSquad array. 
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have to make a copy of this array)

// const WorldCupSquad = ['Babar','Shadab','Asif','Rizwan','Haider','Haris','Ahmed','Shaheen','Hasnain','Nawaz','Wasim','Azam','Naseem','Afridi','Saim'];

// // Copying the original array to avoid modifying it
// const squadCopy = WorldCupSquad.slice();


// const PakMatchSquad = squadCopy.splice(0, 11);

// console.log(`List of Total players: ${WorldCupSquad.join(', ')}.`);
// console.log(`List of Selected 11 players: ${PakMatchSquad.join(', ')}.`);