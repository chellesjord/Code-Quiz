//make a function for random question generator
//create buttons with event listeners.
//add timer with countdown
var body = document.body
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var answerchoices = document.createElement("div");
//create ordered list element
var listEl = document.createElement("li");
//create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Coding Quiz Challenge"
infoEl.textContent = "Try to answer the following code-related questions within the time limit. <br/> Keep in mind that incorrect answers will penalize your score/time by ten seconds!";