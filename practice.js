function mathpractice() {
    var prefix = "$practice.math%"
    var fetch = get.id("output");
    var command = document.getElementById("input").value;
    if (command === prefix + "2.digit.addition") {
        $("body").append('<meta http-equiv="refresh" content="0; URL=./cruncherpracticers/2digitaddition.html" />')
    } else {
        null
    }
}