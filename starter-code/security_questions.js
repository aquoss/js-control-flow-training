var securityQuestions = [{question: "Where were you born?", expectedAnswer: "claremont"},
  {question: "What is your Mom's name?", expectedAnswer: "pamela"},
  {question: "What was the name of your first pet?", expectedAnswer: "brutus"}];
for (var i=0; i<securityQuestions.length; i++) {
  var userAnswer = prompt(securityQuestions[i].question).toLowerCase();
  if (userAnswer !== securityQuestions[i].expectedAnswer) {
    alert("Sorry, that is not correct.");
    return;
  }
}
