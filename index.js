const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);
        if (display.value == 100) {
            display.value = "Miss Na Kita";
        }
    }
    catch(error)
    {
        display.value = "error";
        setTimeout(clearDisplay, 500);
    }
}