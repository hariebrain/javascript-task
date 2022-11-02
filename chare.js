function chareCalc() {
    document.getElementById('answer').innerHTML = ""
    var textValue = document.getElementById("charecterInput")
    var textTrim = textValue.value.trim(' ').split(' ').join('')
    var textTrimValue = textTrim.split('')
    for (let i = 0; i < textTrimValue.length; i++) {
        let count = 0;
        for (let j = 0; j < textTrimValue.length; j++) {
            if (textTrimValue[i] == textTrimValue[j] && i > j) {
                break;
            }
            if (textTrimValue[i] == textTrimValue[j]) {
                count++;
            }
        }
        if (count > 0) {
            if (document.getElementById('answer').innerHTML == "") {
                document.getElementById('answer').innerHTML = "<p>" + textTrimValue + " length in the text is " + textTrimValue.length + "</p>" + "<p> The " + textTrimValue[i] + " length in the text is " + count + "</p>"
            }
            else {
                document.getElementById('answer').innerHTML += "<p> The " + textTrimValue[i] + " length in the text is " + count + "</p>"
                console.log(count, "count")
            }
        }
    }


}