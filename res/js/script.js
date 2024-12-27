const display = document.getElementById('display');
const clear = document.getElementById('clear');
const openParen = document.getElementById('open-paren');
const closeParen = document.getElementById('close-paren');
const divide = document.getElementById('divide');
const power = document.getElementById('power');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const sqrt = document.getElementById('sqrt');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subtract = document.getElementById('subtract');
const pi = document.getElementById('pi');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const add = document.getElementById('add');
const e = document.getElementById('e');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const sin = document.getElementById('sin');
const cos = document.getElementById('cos');
const tan = document.getElementById('tan');
const equals = document.getElementById('equals');

clear.onclick = () => {
    display.value = '0';
};

openParen.onclick = () => {
    if (display.value === '0') {
        display.value = '(';
    } else {
        display.value += '(';
    }
};

closeParen.onclick = () => {
    display.value += ')';
};

divide.onclick = () => {
    display.value += '/';
};

power.onclick = () => {
    display.value += '**';
};

seven.onclick = () => {
    appendToDisplay('7');
};

eight.onclick = () => {
    appendToDisplay('8');
};

nine.onclick = () => {
    appendToDisplay('9');
};

multiply.onclick = () => {
    display.value += '*';
};

sqrt.onclick = () => {
    if (display.value === '0') {
        display.value = 'Math.sqrt(';
    } else {
        display.value += 'Math.sqrt(';
    }
};

four.onclick = () => {
    appendToDisplay('4');
};

five.onclick = () => {
    appendToDisplay('5');
};

six.onclick = () => {
    appendToDisplay('6');
};

subtract.onclick = () => {
    display.value += '-';
};

pi.onclick = () => {
    if (display.value === '0') {
        display.value = 'Math.PI';
    } else {
        display.value += 'Math.PI';
    }
};

one.onclick = () => {
    appendToDisplay('1');
};

two.onclick = () => {
    appendToDisplay('2');
};

three.onclick = () => {
    appendToDisplay('3');
};

add.onclick = () => {
    display.value += '+';
};

e.onclick = () => {
    if (display.value === '0') {
        display.value = 'Math.E';
    } else {
        display.value += 'Math.E';
    }
};

zero.onclick = () => {
    appendToDisplay('0');
};

dot.onclick = () => {
    appendToDisplay('.');
};

sin.onclick = () => {
    if (display.value === '0') {
        display.value = 'Math.sin(';
    } else {
        display.value += 'Math.sin(';
    }
};

cos.onclick = () => {
    if (display.value === '0') {
        display.value = 'Math.cos(';
    } else {
        display.value += 'Math.cos(';
    }
};

tan.onclick = () => {
    if (display.value === '0') {
        display.value = 'Math.tan(';
    } else {
        display.value += 'Math.tan(';
    }
};


equals.onclick = () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
};

const appendToDisplay = (value) => {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
};