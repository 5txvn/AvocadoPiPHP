function tip() {
    var tips = ["If you are currently using the Avocado Pi website, don't forget that you can download Avocado Pi across all operating systems and you can download it as an Android App! To download for Mac OS X, type $download%macosx in the command line! For Windows, type $download%windows and for Linux, type $download%linux", 
"If you don't know what to type, you can type $commands in th command line for more info and $command.types for the different types of commands that there are!", 
"Did you know that Avocado Pi can tell you a joke? Just type $generate%joke in the command line and it will give you a funny joke!", 
"If you would like to provide feedback on Avocado Pi, that would be much appreciated! Just type $feedback in the command line and it will redirect you to the Avocado Pi Feedback form!", 
"You can actually play cookie clicker with Avocado Pi!! Just type $cookie.clicker in the command line!"];
    document.getElementById("tip").innerHTML = tips[Math.floor(Math.random() * 4)]
}
var interval;
$(document).ready(function(){
    interval = setInterval(tip, 10000);
})