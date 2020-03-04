function operate(operation, a, b){

    let calculatedValue;

    switch (operation){
       
        case "add":
            calculatedValue = add(a,b);
            break;

        case "subtract":
            calculatedValue = subtract(a,b);
            break;

        case "divide":
            calculatedValue = divide(a,b);
            break
        
        case "multiply":
            calculatedValue = multiply(a,b);
            break;
        
        default:
            alert("Incorrect opeation entered");
    }

    return calculatedValue;

}

function add(a,b){

    return a+b;
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