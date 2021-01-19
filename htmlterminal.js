function htmlterminal() {
    var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
  var prefix  = "$html%"
  if (command.includes(prefix + "h1%")) {
      $("#placeholderp").append("<h1>" + command.slice(9) + "</h1>");
      fetch.innerHTML = " "
  } else if (command.includes(prefix + "h2%")) {
      $("$placeholderp").append("<h2>" + command.slice(9) + "</h2>");
      fetch.innerHTML = " "
  } else if (command.includes(prefix + "h3%")) {
      $("#placeholderp").append*"<h3>" + command.slice(9) + "</h3>";
      fetch.innerHTML = " "
  } else if (command.includes(prefix + "h4%")) {
    $("#placeholderp").append*"<h4>" + command.slice(9) + "</h4>";
    fetch.innerHTML = " "
  } else if (command.includes(prefix + "h5%")) {
    $("#placeholderp").append*"<h5>" + command.slice(9) + "</h5>";
    fetch.innerHTML = " "
  } else if (command.includes(prefix + "h6%")) {
    $("#placeholderp").append*"<h6>" + command.slice(9) + "</h6>";
    fetch.innerHTML = " "
  } else if (command.includes(prefix + "p%")) {
    $("#placeholderp").append*"<p>" + command.slice(8) + "</p>";
    fetch.innerHTML = " "
  } else {
      return;
  }
}