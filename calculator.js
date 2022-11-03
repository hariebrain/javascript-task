
function calculate() {
    let firstInputValue = document.getElementById("calc1")
    secondInputValue = document.getElementById("calc2")
    if (firstInputValue.value, secondInputValue.value == "") {
        alert("hi")
    } else {
        //Addition
        let value1 = Number(firstInputValue.value) + Number(secondInputValue.value)
        var addValue = document.getElementById("add")
        addValue.innerHTML = "Addition of this inputs is <b>A + B =</b>" + '<b>' + value1 + '</b>'
        //Subtraction
        let value2 = Number(firstInputValue.value) - Number(secondInputValue.value)
        var subValue = document.getElementById("sub")
        subValue.innerHTML = "Subtraction of this inputs is <b>A - B =</b>" + '<b>' + value2 + '</b>'
        //Multiply
        let value3 = Number(firstInputValue.value) * Number(secondInputValue.value)
        var multiplyValue = document.getElementById("multiply")
        multiplyValue.innerHTML = "Multiplication of this inputs is <b>A * B =</b>" + '<b>' + value3 + '</b>'
        //Division
        let value4 = Number(firstInputValue.value) / Number(secondInputValue.value)
        var divisionValue = document.getElementById("div")
        divisionValue.innerHTML = "Division of this inputs is <b>A / B =</b>" + '<b>' + value4 + '</b>'
        //Squared the sum value
        let value5 = value1 * value1
        var squaredValue = document.getElementById("square")
        squaredValue.innerHTML = "Squared the sum value of <b>A </b> and <b>B =</b>" + '<b>' + value5 + '</b>'
        //Square root the sum value
        let value6 = Math.sqrt(value1)
        var squareRootValue = document.getElementById('squareRoot')
        squareRootValue.innerHTML = "Square root the sum value of <b>A </b> and <b>B =</b>" + '<b>' + value6 + '</b>'
        //Logarithm of the sum value
        let value7 = Math.log(value1)
        var logarithmValue = document.getElementById('log')
        logarithmValue.innerHTML = "Logarithm the sum value of <b>A </b> and <b>B =</b>" + '<b>' + value7 + '</b>'
        //cos0
        let value8 = Math.cos(value1)
        var cosValue = document.getElementById("cos")
        cosValue.innerHTML = "Cos the sum value of <b>A </b> and <b>B =</b>" + '<b>' + value8 + '</b>'
        //sin0
        let value9 = Math.sin(value1)
        var sinValue = document.getElementById("sin")
        sinValue.innerHTML = "Sin the sum value of <b>A </b> and <b>B =</b>" + '<b>' + value9 + '</b>'
        //tan0
        let value10 = Math.tan(value1)
        var tanValue = document.getElementById("tan")
        tanValue.innerHTML = "tan the sum value of <b>A </b> and <b>B =</b>" + '<b>' + value10 + '</b>'
    }
}