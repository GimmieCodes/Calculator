function add (a,b){
    return a + b
}

function subtract (a,b){
    return a - b
}

function multiply (a,b){
    return a * b
}

function division (a,b){
    return a / b
}

function operate (operator,a,b){
    if (operator == add){
        return add(a,b)
    }else if (operator == subtract){
        return subtract(a,b)
    }else if (operator == multiply){
        return multiply(a,b)
    }else if (operator == division){
        return division(a,b)
    }
}
const clear = document.querySelector(".clearButton")
clear.addEventListener("click", () =>{
    display.textContent = ""
    return a = 0, b = 0, i = 1
})

const one = document.querySelector("#one");
one.addEventListener('click', () =>{
    display.textContent += 1
    if (i == 1){
        display.textContent = "1"
        return i = 0
    }
})
const two = document.querySelector("#two");
two.addEventListener('click', () =>{
    display.textContent += 2
    if (i == 1){
        display.textContent = "2"
    }
})
const three = document.querySelector("#three");
three.addEventListener('click', () =>{
    display.textContent += 3
    if (i == 1){
        display.textContent = "3"
    }
})
const four = document.querySelector("#four");
four.addEventListener('click', () =>{
    display.textContent += 4
    if (i == 1){
        display.textContent = "4"
    }
})
const five = document.querySelector("#five");
five.addEventListener('click', () =>{
    display.textContent += 5
    if (i == 1){
        display.textContent = "5"
    }
})
const six = document.querySelector("#six");
six.addEventListener('click', () =>{
    display.textContent += 6
    if (i == 1){
        display.textContent = "6"
    }
})
const seven = document.querySelector("#seven");
seven.addEventListener('click', () =>{
    display.textContent += 7
    if (i == 1){
        display.textContent = "7"
    }
})
const eight = document.querySelector("#eight");
eight.addEventListener('click', () =>{
    display.textContent += 8
    if (i == 1){
        display.textContent = "8"
    }
})
const nine = document.querySelector("#nine");
nine.addEventListener('click', () =>{
    display.textContent += 9
    if (i == 1){
        display.textContent = "9"
    }
})
const zero = document.querySelector("#zero");
zero.addEventListener('click', () =>{
    display.textContent += 0
    if (i == 1){
        display.textContent = "0"
    }
})

let i = 1

const plus = document.querySelector("#plus");
plus.addEventListener('click', () =>{
    a = parseInt(display.textContent)
    operator = add
    console.log(a)
    display.textContent += " + "
    if (i < 2){
        i++
        console.log(i)
    }else if (i = 1){
        b = parseInt(display.textContent)
        display.textContent = operate(operator,a,b)
    }
})

const minus = document.querySelector("#minus");
minus.addEventListener('click', () =>{
    a = parseInt(display.textContent)
    operator = subtract
    console.log(a)
    display.textContent = ""
    if (i < 2){
        i++
        console.log(i)
    }else if (i = 1){
        b = parseInt(display.textContent)
        display.textContent = operate(operator,a,b)
    }
})

const times = document.querySelector("#times");
times.addEventListener('click', () =>{
    a = parseInt(display.textContent)
    operator = multiply
    console.log(a)
    display.textContent = ""
    return operator
})

const divide = document.querySelector("#divide");
divide.addEventListener('click', () =>{
    a = parseInt(display.textContent)
    operator = division
    console.log(a)
    display.textContent = ""
    return operator
})

const equal = document.querySelector("#equal");
equal.addEventListener('click', () =>{
    b = parseInt(display.textContent)
    display.textContent = operate(operator,a,b)
})








const display = document.querySelector(".display")