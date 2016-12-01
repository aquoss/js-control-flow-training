var userLogin = {userName: "Amber", password: "cookies"};
var enteredPassword = prompt("Hi " + userLogin.userName + "! Please enter your password.");
for (var numOfTries = 0; numOfTries < 3; numOfTries++) {
  if (enteredPassword !== userLogin.password) {
    alert("That's incorrect. Please re-enter your password.");
    enteredPassword = prompt("Let's try this again shall we?");
  } else {
    alert("Yipee you remembered!");
    return;
  }
}
