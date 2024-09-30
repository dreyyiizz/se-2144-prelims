const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");
const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "你好", "Привет", "مرحبا"];

//Appends a value inside the display
function appendToDisplay(input) {
    if (!display.disabled) {
        display.value += input;
    }
}

//Clears the display
function clearDisplay() {
    if (display.disabled) {
        display.disabled = false;
        display.value = "Hello";

        //enables all button to function
        buttons.forEach(button => {
            button.disabled = false
        });
        setTimeout(() =>{
            display.value = "";
        },3000)
    } 
    else {
        display.value = "";
    }
}

//calculates the given display
function calculate() {
    if (!display.disabled) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
}


//removes the last added operator or number
function remove() {
    if (!display.disabled) {
        display.value = display.value.slice(0, -1);
    }
}

function bye() {
    display.value = "Goodbye";
    display.disabled = true;
    buttons.forEach(button => {
        if (button.innerText !== "AC") {
            button.disabled = true;
        }
    });

    
    setTimeout(() => {
        display.value ="";
    }, 1000);
}

function hello() {
    const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "你好", "Привет", "Olá"];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    display.value = randomGreeting;
    display.disabled = false;
    buttons.forEach(button => {
      button.disabled = false;
    });
}

