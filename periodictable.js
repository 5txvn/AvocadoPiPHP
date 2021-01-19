function periodictable() {
    var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
  var prefix  = "$science%periodic.table%"
  var shells = "shells%"
  var period = "period%"
  if (command === period + (("Hydrogen").toLowerCase() || ("H").toLowerCase())){fetch.innerHTML = "1"}
  else if (command === period + (("Helium").toLowerCase() || ("He").toLowerCase())){fetch.innerHTML = "1"}
}