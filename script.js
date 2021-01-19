function eventfn(event){
  if (event.keyCode === 13) {
    // Reset output box
    let output = document.getElementById("output");
    output.innerHTML = ""

    // Run all the functinos that handle commands
    url();
    urlopen();
    datecommands();
    timeline();
    joke();
    genericcommands();
    chat();
    exec();
    exec2();
    getemoji();
    noun();
    riddle();
    mathpractice();
    periodictable();

    res = output.innerHTML;
    // If there still isnt anything in the output set it to the error message
    if (!res) output.innerHTML = "Sorry, invalid command" 
  } else {
    return null;
  }
} 
var score = 0;
function buttonfn() {
  document.getElementById("score").innerHTML = score;
  score++; 
  if (score > 300) {
    score +=3;
  } else if (score > 150) {
  score += 2;
  document.getElementById("level").innerHTML = "level 2";
  } else if (score > 50) {
    score += 1;
  document.getElementById("level").innerHTML = "level 1";
  }
 }
 var createtxt = "<php ?>"
function exec() {
  let prefix = "$"
  let fetch = document.getElementById("output");
  let command = document.getElementById("input").value;
let res = ""
switch (command) {
  //text commands
  case (prefix + "buh"):
    res = "What?"
    break;
  //reload
  case (prefix + "reload"):
    window.location.reload();
    break;
  //location
  case (prefix + "current.url"):
    res = window.location.href;
    break;
  case (prefix + "current.hostname"):
    res = window.location.hostname;
    break;
  case (prefix + "current.pathname"):
    res = window.location.pathname;
    break;
  case (prefix + "current.protocol"):
    res = window.location.protocol;
    break;
  case (prefix + "cookie.clicker"):
    res = "<button onclick='buttonfn()' style='width:225px;'><img src='cookie.jpg' height='25%' width='25%'></button>";
    break;
  default:
    return;
}
fetch.innerHTML = res;
}
function exec2() {
  var prefix = "$"
    var fetch = document.getElementById("output");
    var command = document.getElementById("input").value;
  function sticky(name, content) {
    localStorage.setItem(name, content)
  };
  function getsticky(stickyname) {
    var fetch = document.getElementById("output");
    fetch.innerHTML = localStorage.getItem(stickyname)
  };
  function stickyclear() {
    localStorage.clear()
  };
  //math methods
  if (command.includes(prefix + "math.abs.")) {
    fetch.innerHTML = Math.abs(parseInt(command.slice(10, 100000)));
  } else if (command.includes(prefix + "math.acos.")) {
    fetch.innerHTML = Math.acos(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.acosh.")) {
    fetch.innerHTML = Math.acosh(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.asin.")) {
    fetch.innerHTML = Math.asin(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.asinh.")) {
    fetch.innerHTML = Math.asinh(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.atan.")) {
    fetch.innerHTML = Math.atan(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.atanh.")) {
    fetch.innerHTML = Math.atanh(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.cbrt.")) {
    fetch.innerHTML = Math.cbrt(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.ceil.")) {
    fetch.innerHTML = Math.ceil(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.clz32.")) {
    fetch.innerHTML = Math.clz32(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.cos.")) {
    fetch.innerHTML = Math.cos(parseInt(command.slice(10, 100000)));
  } else if (command.includes(prefix + "math.cosh.")) {
    fetch.innerHTML = Math.cosh(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.exp.")) {
    fetch.innerHTML = Math.exp(parseInt(command.slice(10, 100000)));
  } else if (command.includes(prefix + "math.expm1.")) {
    fetch.innerHTML = Math.expm1(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.floor.")) {
    fetch.innerHTML = Math.floor(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.fround.")) {
    fetch.innerHTML = Math.fround(parseInt(command.slice(13, 100000)));
  } else if (command.includes(prefix + "math.log.")) {
    fetch.innerHTML = Math.log(parseInt(command.slice(10, 100000)));
  } else if (command.includes(prefix + "math.log10.")) {
    fetch.innerHTML = Math.log10(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.log1p.")) {
    fetch.innerHTML = Math.log1p(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.log2.")) {
    fetch.innerHTML = Math.log2(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.round.")) {
    fetch.innerHTML = Math.round(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "math.sign.")) {
    fetch.innerHTML = Math.sign(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.sin.")) {
    fetch.innerHTML = Math.sin(parseInt(command.slice(10, 100000)));
  } else if (command.includes(prefix + "math.sinh.")) {
    fetch.innerHTML = Math.sinh(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.sqrt.")) {
    fetch.innerHTML = Math.sqrt(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.tan.")) {
    fetch.innerHTML = Math.tan(parseInt(command.slice(10, 100000)));
  } else if (command.includes(prefix + "math.tanh.")) {
    fetch.innerHTML = Math.tanh(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "math.trunc.")) {
    fetch.innerHTML = Math.trunc(parseInt(command.slice(12, 100000)));
  } 
  //number methods
  else if (command.includes(prefix + "is.finite.")) {
    fetch.innerHTML = isFinite(parseInt(command.slice(11, 100000)));
  } else if (command.includes(prefix + "is.integer.")) {
    fetch.innerHTML = isInteger(parseInt(command.slice(12, 100000)));
  } else if (command.includes(prefix + "is.nan.")) {
    fetch.innerHTML = isNaN(parseInt(command.slice(8, 100000)));
  } else if (command.includes(prefix + "is.safe.integer.")) {
    fetch.innerHTML = isSafeInteger(parseInt(command.slice(17, 100000)));
  } else if (command.includes(prefix + "to.exponential.")) {
    fetch.innerHTML = toExponential(parseInt(command.slice(16, 100000)));
  } else if (command.includes(prefix + "to.fixed.")) {
    fetch.innerHTML = toFixed(parseInt(command.slice(10, 100000)));
  } else if (command.includes(prefix + "to.precision.")) {
    fetch.innerHTML = toPrecision(parseInt(command.slice(14, 100000)));
  } else if (command.includes(prefix + "value.of.")) {
    fetch.innerHTML = valueOf(parseInt(command.slice(10, 100000)));
  }
  //sticky
  else if (command.includes(prefix + "getsticky")) {
    fetch.innerHTML = eval(command.slice(1, 1000000))
  } else if (command.includes(prefix + "sticky")) {
    fetch.innerHTML = eval(command.slice(1, 1000000))
  }
  //apps
  else if (command === "$start%melon") {
    window.open("./melon/index.php")
  }
  //run
  else if (command.includes(prefix + "run.")) {
    fetch.innerHTML = eval(command.slice(5, 1000000));
  } else if (command.includes(prefix + "create.file%txt%")) {
    $("body").append('<?php $fp=fopen("txtfiles/test.txt", "w"); fwrite($fp, "this is a test"); fclose($fp); ?>')
  }
}