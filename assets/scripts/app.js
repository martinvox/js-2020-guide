//delete for git testing

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let logOperatorUsed = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //output text generated
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (calculationType != 'add' && calculationType != 'substract' && calculationType != 'multiply' 
    && calculationType != 'divide' || !enteredNumber) {
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'add')  {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'substract'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'multiply'){
        currentResult += enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'divide'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }


    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog('add', initialResult, enteredNumber, currentResult);

}

function add() {
   calculateResult('add')
}

function substract() {
    calculateResult('substract')
}

function multiply() {
    calculateResult('multiply')
}

function divide() {
    calculateResult('divide')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);