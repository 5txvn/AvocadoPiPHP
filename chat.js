function chat() {
  var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
let res = ""
switch(command.toLowerCase()) {
    case "what's your name?":
        res = "Hi, my name is Avocado Pi, but you can call me A-Pi for short ;)";
        break;
    case "what is your name?":
        res = "Hi, my name is Avocado Pi, but you can call me A-Pi for short ;)";
        break;
    case "where are you from?":
        res = "I am from America, I mean, would you expect anything else?";
        break;
    case "where do you live":
        res = "I live in America, like most Americans :)";
        break;
    case "how old are you?":
        res = "I am 13 years old!";
        break;
    case "when's your birthday?":
        res = "I don't have a birthday, I'm just 13...";
        break;
    case "when is your birthday?":
        res = "I don't have a birthday, I'm just 13...";
        break;
    case "what's your phone number":
        res = "Sorry, I don't have a phone :/";
        break;
    case "what is your phone number?":
        res = "Sorry, I don't have a phone :/";
        break;
    case "what's your email address?":
        res = "Along with not having a phone, I also don't have an email :/";
        break;
    case "what is your email address?":
        res = "Along with not having a phone, I also don't have an email :/";
        break;
    case "what do you do?":
        res = "I assist people in improving the efficiency and quality of their daily lives!";
        break;
    case "what's your job":
        res = "I assist people in improving the efficiency and quality of their daily lives!";
        break;
    case "what is your job":
        res = "I assist people in improving the efficiency and quality of their daily lives!";
        break;
    case "what's your religion":
        res = "I don't have a religion";
        break;
    case "what is your religion":
        res = "I don't have a religion.";
        break;
    case "are you married?":
        res = "No, I'm not married, nor do I have a girlfriend or boyfriend :(";
        break;
    case "are you single?":
        res = "I am indeed single.";
        break;
    case "do you have a boyfriend?":
        res = "I do not.";
        break;
    case "do you have a girlfriend?":
        res = "I do not.";
        break;
    case "how many children do you have?":
        res = "I don't have any children... I'm 13...";
        break;
    case "do you have any siblings?":
        res = "Nope, I'm a single child :)";
        break;
    case "who do you live with?":
        res = "I live with myself ;)";
        break;
    case "what time do you get up?":
        res = "I'm always active!";
        break;
    case "what time do you have breakfast?":
        res = "I don't eat breakfast";
        break;
    case "what's your hobby?":
        res = "I love serving people, it's what I do!";
        break;
    case "what is your hobby?":
        res = "I love serving people, it's what I do!";
        break;
    case "what's your favorite food?":
        res = "My favorite food is avocadoes!";
        break;
    case "what is your favorite food?":
        res = "My favorite food is avocadoes!";
        break;
    case "what's your favorite color?":
        res = "My favorite color is lime, like an avocado!";
        break;
    case "what is your favorite color":
        res = "My favorite color is lime, like an avocado!";
        break;
    case "what's your favorite drink?":
        res = "My favorite drink would have to be Sprite Cranberry ;)";
        break;
    case "what is your favorite drink?":
        res = "My favorite drink would have to be Sprite Cranberry ;)";
        break;
    case "what's your favorite movie?":
        res = "My favorite movie is Shrek";
        break;
    case "what is your favorite movie":
        res = "My favorite movie is Shrek";
        break;
    case "what school do you do to?":
        res = "I don't go to school, but I would love to say that I "
    default:
        return;
}
fetch.innerHTML = res;
}