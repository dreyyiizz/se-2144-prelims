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
    const greetings = [
        "Hallo",  // Afrikaans
        "Përshëndetje",  // Albanian
        "ሰላም (Selam)",  // Amharic
        "مرحبا (Marhaba)",  // Arabic
        "Բարև (Barev)",  // Armenian
        "Salam",  // Azerbaijani
        "Kaixo",  // Basque
        "নমস্কার (Nomoshkar)",  // Bengali
        "Kuzu zangpo la",  // Bhutanese
        "Zdravo",  // Bosnian
        "Здравейте (Zdraveĭte)",  // Bulgarian
        "ဟယ်လို (Hailo)",  // Burmese
        "Hola",  // Catalan
        "你好 (Nǐ hǎo)",  // Chinese (Mandarin)
        "你好 (Nay Hoh)",  // Chinese (Cantonese)
        "Bok",  // Croatian
        "Ahoj",  // Czech
        "Hej",  // Danish
        "Hallo",  // Dutch
        "Hello",  // English
        "Tere",  // Estonian
        "Hei",  // Finnish
        "Bonjour",  // French
        "Hallo",  // German
        "Γειά σου (Geia sou)",  // Greek
        "હેલો (Helo)",  // Gujarati
        "שלום (Shalom)",  // Hebrew
        "नमस्ते (Namaste)",  // Hindi
        "Szia",  // Hungarian
        "Halló",  // Icelandic
        "Halo",  // Indonesian
        "Ciao",  // Italian
        "こんにちは (Konnichiwa)",  // Japanese
        "안녕하세요 ",  // Korean
        "ສະບາຍດີ (Sabaidee)",  // Lao
        "Salve",  // Latin
        "Sveiki",  // Latvian
        "Sveiki",  // Lithuanian
        "Здраво (Zdravo)",  // Macedonian
        "ഹലോ (Halo)",  // Malayalam
        "你好 (Nǐ hǎo)",  // Mandarin
        "こんにちは (Konnichiwa)",  // Japanese
        "안녕하세요 ",  // Korean
        "ສະບາຍດີ (Sabaidee)",  // Lao
        "Salve",  // Latin
        "Sveiki",  // Latvian
        "Sveiki",  // Lithuanian
        "Здраво (Zdravo)",  // Macedonian
        "ഹലോ (Halo)",  // Malayalam
        "你好 (Nǐ hǎo)",  // Mandarin
        "Hola",  // Spanish
        "Hej",  // Swedish
        "สวัสดี (Sawasdee)",  // Thai
        "Merhaba",  // Turkish
        "Привіт (Pryvit)",  // Ukrainian
        "ہیلو (Hello)",  // Urdu
        "Xin chào",  // Vietnamese
        "Sawubona",  // Zulu
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    display.value = randomGreeting;
    display.disabled = false;
    buttons.forEach(button => {
      button.disabled = false;
    });
}

