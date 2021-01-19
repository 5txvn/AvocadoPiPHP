    function genericcommands() {
        var fetch = document.getElementById("output");
    var command = document.getElementById("input").value;
    let prefix = "$";
    let res = ""
switch(command) {
    case (prefix + "whoami"):
        res = "Hello there! My name is Avacada, your helpful bot coded by Steven and created by Konark, Owen, Eli, and Angus. I can do tons of things like tell you the date and time, give you a joke or riddle, give you shortcuts to your favorite sites, and so much more! To learn more about what you can do with me, type $commands and $command.types in the Command Line.";
        break;
    case (prefix + "version"):
        res = "v1.0.6";
        break;
    case (prefix + "feedback"):
        window.open('https://forms.gle/PtDFHjdpwGKovrAH7');
        break;
    case (prefix + "generate%face"):
        res = "<iframe src='https://thispersondoesnotexist.com'>";
        break;
    case (prefix + "lines.of.code"):
        res = "2546";
        break;
    default:
        return;

}
fetch.innerHTML = res;
    }