var firstValue;
var secondValue;
var operation;

const screen = document.getElementById("screen");


function operate(operation, a, b){

    let calculatedValue;

    switch (operation){
       
        case "+":
            calculatedValue = add(a,b);
            break;

        case "-":
            calculatedValue = subtract(a,b);
            break;

        case "÷":
            calculatedValue = divide(a,b);
            break
        
        case "X":
            calculatedValue = multiply(a,b);
            break;
        
        default:
            alert("Incorrect opeation entered");
    }

    return calculatedValue;

}

function add(a,b){

    return Number(a)+Number(b);
}

function subtract(a,b){

    return a-b;
}

function divide(a,b){

    return a/b;
}

function multiply(a,b){

    return a*b;
}

function populateDisplay(clickedButton){

    let buttonValue = clickedButton.textContent;

    if (screen.innerHTML.length < 7){
        screen.innerHTML += buttonValue;

        if(operation == undefined)
        {
            firstValue = screen.innerHTML;
        }
        else
        {
            secondValue = screen.innerHTML;
        }
    }
    
}

function clearScreenPostOperationSelection(){
    screen.innerHTML = "";
}

function clearScreenFromClearButton(){
    
    screen.innerHTML = "";

    firstValue = undefined;
    secondValue = undefined;
    operation = undefined;
}

function setOperation(clickedButton){

    operation = clickedButton.textContent;

    clearScreenPostOperationSelection();

}

function equalsOnClick(){

    let calculatedValue = operate(operation,firstValue,secondValue);

    if(calculatedValue.length > 8){

    }

    screen.innerHTML = calculatedValue;

}