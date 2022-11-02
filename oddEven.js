function calculate() {
    var firstValue = document.getElementById("odd").value
    var secondValue = document.getElementById("even").value
    if (firstValue, secondValue == "") {
        alert("Please enter the value")
    } else if (Number(firstValue) >= Number(secondValue)) {
        alert("Please enter greater value is B field")
    } else {
        var Array = []
        var even = []
        var odd = []
        var sum = 0
        var evenSum = 0
        var oddSum = 0
        var one = document.getElementById("1")
        two = document.getElementById("2")
        three = document.getElementById("3")
        four = document.getElementById("4")
        five = document.getElementById("5")
        six = document.getElementById("6")
        seven = document.getElementById("7")
        for (let i = Number(firstValue); i <= Number(secondValue); i++) {
            Array.push(i)
            sum = sum + i
            one.innerHTML = "The numbers in between A and B =" + Array
            two.innerHTML = "The sum of total numbers in between A and B =" + sum
            three.innerHTML = "The total numbers in between A and B =" + Array.length
            if (i % 2 == 0) {
                console.log(evenSum)
                even.push(i)
                evenSum = evenSum + i
                four.innerHTML = "The even numbers is A and B =" + even
                five.innerHTML = "The even numbers total is A and B =" + evenSum
            } else {
                odd.push(i)
                oddSum = oddSum + i
                six.innerHTML = "The odd numbers is A and B =" + odd
                seven.innerHTML = "The odd numbers total is A and B =" + oddSum
            }
        }
    }
};