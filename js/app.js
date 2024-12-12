let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the button clicked is '='
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        // Check if the button clicked is 'AC' (clear all)
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        // Check if the button clicked is the 'backspace' button (e.g., '←')
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // For all other buttons (numbers and operators), append to the string
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});


