let string = "";
let buttons = document.querySelectorAll('.button');

function formatDecimal(number) {
    if (number % 1 === 0) {
        return number.toString();
    } else {
        return number.toFixed(2);
    }
}


Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {

            let len = string.length;
            if ((string[len - 1] == "-") || (string[len - 1] == "+") || (string[len - 1] == "/") || (string[len - 1] == "*")) {
                document.querySelector('input').value = "Invalid Input";
            }
            else {
                string = eval(string);
                let x = parseFloat(string, 10)
                document.querySelector('input').value = formatDecimal(x);
            }

        }
        else if (e.target.innerHTML == 'RESET') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1)
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})