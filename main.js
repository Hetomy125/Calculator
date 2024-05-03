function setNumber(number) {
    let resultString = document.getElementById('display');
    let currentText = resultString.innerText;
    resultString.innerText = currentText + number
}

function result() {
    let resultString = document.getElementById('display');
    resultString.innerText = eval(resultString.innerText)
}

function del() {
    let resultString = document.getElementById('display');
    resultString.innerText = ''
}

function perecaent () {
    let resultString = document.getElementById('display');
    resultString.innerText = eval (eval(resultString.innerText)/100);
}

function swapMark () {
    let resultString = document.getElementById('display');
    let number = parseFloat (resultString.innerText);
    number = -number;
    resultString.innerText = number.toString ();
}