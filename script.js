const display = document.getElementById("display");
const historyDisplay = document.getElementById("history-display");
const historyList = document.getElementById("history-list");
let submissions = [];

function addChar(char) {
    if (display.value === "0" && "+-/*".includes(char)) {
        display.value += char;
    } 
    else if (display.value === "Error" || display.value === "0") {
        display.value = char;
    }
    else {
        display.value += char;
    }
}

function backspace(){
    if (display.value.length > 1 && display.value !== "Error"){
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function clearScreen() {
    display.value = "0";
}

function addHistory() {
    let history = "";
    submissions.forEach(element => {
        console.log(element);
        history += `<div id="history-tab">${element} <button id="history-add" onclick="add('${(element)}')">ADD</button></div>`
    });
    historyList.innerHTML = history;
}


function calculate() {
    var expression = display.value;
    try {
        display.value = String(eval(expression));
        if (submissions.length == 10) {
            submissions.pop();
        }
        submissions.unshift(expression);
        addHistory();
    }
    catch (e) {
        display.value = "Error";
    }
}

function displayHistory(){
    historyDisplay.style.display = 'flex';
}

function hideHistory() {
    historyDisplay.style.display = 'none';
}

function add(submission) {
    console.log(submission);
    display.value = submission;
}
