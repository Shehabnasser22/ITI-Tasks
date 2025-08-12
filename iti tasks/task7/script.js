//1
alert("Welcome to my first site");
//2
function exchangeEgyPound(egyPounds) {
    const exchangeRate = 0.03235;
    return Number((egyPounds * exchangeRate).toFixed(1));
}
//3
function printNumbers() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log("I’m even");
        } else {
            console.log(i);
        }
    }
}
//4
 function getUserInfo() {
      let firstName, birthYear, mobileNumber, color, isValid = false;

      while (!isValid) {
        firstName = prompt("Enter your first name:");
        if (firstName && !/^\d+$/.test(firstName)) {
          isValid = true;
        } else {
          alert("First name should be characters only, no numbers!");
        }
      }

      isValid = false;
      while (!isValid) {
        birthYear = prompt("Enter your birth year:");
        if (birthYear && !isNaN(birthYear) && birthYear > 1900) {
          isValid = true;
        } else {
          alert("Birth year should be a number greater than 1900!");
        }
      }

      isValid = false;
      while (!isValid) {
        mobileNumber = prompt("Enter your mobile number (11 digits):");
        if (mobileNumber && !isNaN(mobileNumber) && mobileNumber.length === 11) {
          isValid = true;
        } else {
          alert("Mobile number should be 11 digits!");
        }
      }

      isValid = false;
      while (!isValid) {
        color = prompt("Choose a color (red, green, or blue):").toLowerCase();
        if (color && ["red", "green", "blue"].includes(color)) {
          isValid = true;
        } else {
          alert("Color should be red, green, or blue!");
        }
      }

      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;

      const display = document.getElementById("displayInfo");
      display.style.color = color;
      display.innerHTML = `welcome dear ${firstName}<br>your age is ${age}<br>your mobile is ${mobileNumber}`;
    }

    getUserInfo();