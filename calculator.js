//handle calculate button event

const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;

    if (digit == '=') {
        let string = document.getElementById("pin-typed").value;
        const value = eval(string);
        const inputTyped = document.getElementById('pin-typed');
        inputTyped.value = value;
    }
    else if (digit === 'C') {
        const inputTyped = document.getElementById('pin-typed');
        inputTyped.value = '';
    }
    else {
        const inputTyped = document.getElementById('pin-typed');
        let inputValue = inputTyped.value;
        inputValue = inputValue + digit;
        inputTyped.value = inputValue;
    }

});