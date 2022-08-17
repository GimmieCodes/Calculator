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
let a = 0
let b = 0

const clear = document.querySelector(".clearButton")
clear.addEventListener("click", () =>{
    display.textContent = ""
    return a = 0, b = 0, i = 1
})

const one = document.querySelector("#one");
one.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 1
        }
        else{
            removeSelected()
            display.textContent = "1"
        }
})
const two = document.querySelector("#two");
two.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 2
        }
        else{
            removeSelected()
            display.textContent = "2"
        }
})
const three = document.querySelector("#three");
three.addEventListener('click', () =>{
    if (a != display.textContent){
    display.textContent += 3
    }
    else{
        removeSelected()
        display.textContent = "3"
    }
})
const four = document.querySelector("#four");
four.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 4
        }
        else{
            removeSelected()
            display.textContent = "4"
        }
})
const five = document.querySelector("#five");
five.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 5
        }
        else{
            removeSelected()
            display.textContent = "5"
        }
})
const six = document.querySelector("#six");
six.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 6
        }
        else{
            removeSelected()
            display.textContent = "6"
        }
})
const seven = document.querySelector("#seven");
seven.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 7
        }
        else{
            display.textContent = "7"
        }
})
const eight = document.querySelector("#eight");
eight.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 8
        }
        else{
            display.textContent = "8"
        }
})
const nine = document.querySelector("#nine");
nine.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 9
        }
        else{
            display.textContent = "9"
        }
})
const zero = document.querySelector("#zero");
zero.addEventListener('click', () =>{
    if (a != display.textContent){
        display.textContent += 0
        }
        else{
            display.textContent = "0"
        }
})
const decimel = document.querySelector("#decimel");
decimel.addEventListener('click', () =>{
    if (a != display.textContent && display.textContent.indexOf(".") != 1){
        display.textContent += "."
        }
        else if (a == display.textContent){
            display.textContent = "."
        }
})

function removeSelected(){
        plus.classList.remove("selected")
        times.classList.remove("selected")
        minus.classList.remove("selected")
        divide.classList.remove("selected")

}

const plus = document.querySelector("#plus");
plus.addEventListener('click', () =>{
    if (a == 0){
    a = parseFloat(display.textContent)
    plus.classList.add("selected")
    console.log(a)
    }else{
        result()
    }
    operator = add
})






const minus = document.querySelector("#minus");
minus.addEventListener('click', () =>{
    if (a == 0){
        a = parseFloat(display.textContent)
        minus.classList.add("selected")
        console.log(a)
        }else{
            result()
        }
        minus.classList.add("selected")
        operator = subtract
})

const times = document.querySelector("#times");
times.addEventListener('click', () =>{
    if (a == 0){
        a = parseFloat(display.textContent)
        times.classList.add("selected")
        console.log(a)
        }else{
            result()
        }
        operator = multiply
        times.classList.add("selected")
})

const divide = document.querySelector("#divide");
divide.addEventListener('click', () =>{
    if (a == 0){
        a = parseFloat(display.textContent)
        divide.classList.add("selected")
        console.log(a)
        }else{
            result()
        }
        operator = division
        divide.classList.add("selected")
})

const equal = document.querySelector("#equal");
equal.addEventListener('click', () =>{
   result()
})
function result(){
    b = parseFloat(display.textContent)
    a = display.textContent = operate(operator,a,b)
    if (isNaN(a)){
        display.textContent = "This Caluclator will now self destruct in 30 seconds..."
    }
    console.log(a)
    removeSelected()
}







const display = document.querySelector(".display")
