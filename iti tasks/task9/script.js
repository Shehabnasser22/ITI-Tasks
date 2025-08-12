function showDate() {
      document.getElementById('dateDisplay').innerText = new Date().toLocaleString();
    }

    // Task 2: Check palindrome
let inputStr = prompt("Enter a string:");
let considerCase = confirm("Consider case sensitivity? OK for yes, Cancel for no.");
let checkStr = inputStr;
if (!considerCase) {
  checkStr = inputStr.toLowerCase();
}
let isPalindrome = true;
for (let i = 0; i < Math.floor(checkStr.length / 2); i++) {
  if (checkStr[i] !== checkStr[checkStr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
alert(`The string "${inputStr}" is ${isPalindrome ? '' : 'not '}a palindrome.`);


// Task 3: Array operations +, *, /
let arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(parseFloat(prompt(`Enter number ${i + 1}:`)));
}
let sum = arr.reduce((a, b) => a + b, 0);
let product = arr.reduce((a, b) => a * b, 1);
let division = arr.reduce((a, b) => a / b);
console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Division: ${division}`);


// Task 4: Sort array ascending and descending
let arr4 = [];
for (let i = 0; i < 5; i++) {
  arr4.push(parseFloat(prompt(`Enter number ${i + 1}:`)));
}
let ascending = [...arr4].sort((a, b) => a - b);
let descending = [...arr4].sort((a, b) => b - a);
console.log(`Ascending: ${ascending.join(', ')}`);
console.log(`Descending: ${descending.join(', ')}`);

// Task 5: Circle area
let radius = parseFloat(prompt("Enter the circle's radius:"));
let area = Math.PI * radius * radius;
alert(`The area of the circle is ${area.toFixed(2)}`);

// Task 6: Square root
let value = parseFloat(prompt("Enter a value:"));
let sqrt = Math.sqrt(value);
alert(`The square root is ${sqrt.toFixed(2)}`);

// Task 7: Cos of angle (assuming degrees)
let angle = parseFloat(prompt("Enter an angle in degrees:"));
let radians = angle * Math.PI / 180;
let cosValue = Math.cos(radians);
alert(`The cosine of ${angle} degrees is ${cosValue.toFixed(2)}`);