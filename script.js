function check() {
    let userInput = parseInt(document.getElementById('getvalue').value);
    if (userInput > 0) {
        document.getElementById('result').innerHTML = `${userInput} is a Positive Number`;
    } else if (userInput == 0){
        document.getElementById('result').innerHTML = `You Have Enter ${userInput}`;
    }
    else if (userInput < 0) {
        document.getElementById('result').innerHTML = `${userInput} is a Negative Number`;
    } else {
        document.getElementById('result').innerHTML = "Enter A Valid Number";
    }
}