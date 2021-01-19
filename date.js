function datecommands() {
    let fetch = document.getElementById("output");
    let command = document.getElementById("input").value;
    let prefix = "$date%";
    var date = new Date();
    let res = ""
    switch(command) {
        case (prefix):
            res = date.getDate();
            break;
          case (prefix + "day"):
            res = date.getDay();
            break;
          case (prefix + "year"):
            res = date.getFullYear();
            break;
          case (prefix + "hour"):
            res = date.getHours();
            break;
          case (prefix + "millisecond"):
            res = date.getMilliseconds();
            break;
          case (prefix + "minute"):
            res = date.getMinutes();
            break;
          case (prefix + "month"):
            res = date.getMonth();
            break;
          case (prefix + "second"):
            res = date.getSeconds();
            break;
          case (prefix + "time"):
            res = date.getTime();
            break;
          case (prefix + "timezone.offset"):
            res = date.getTimezoneOffset();
            break;
          case (prefix + "UTC"):
            res = date.getUTCDate();
            break;
          case (prefix + "day.UTC"):
            res = date.getUTCDay();
            break;
          case (prefix + "year.UTC"):
            res = date.getUTCFullYear();
            break;
          case (prefix + "hour.UTC"):
            res = date.getUTCHours();
            break;
          case (prefix + "millisecond.UTC"):
            res = date.getUTCMilliseconds();
            break;
          case (prefix + "minute.UTC"):
            res = date.getUTCMinutes();
            break;
          case (prefix + "month.UTC"):
            res = date.getUTCMonth();
            break;
          case (prefix + "second.UTC"):
            res = date.getUTCSeconds();
            break;
          case (prefix + "set"):
            res = date.setDate();
            break;
          case (prefix + "year.set"):
            res = date.setFullYear();
            break;
          case (prefix + "hour.set"):
            res = date.setHours();
            break;
          case (prefix + "millisecond.set"):
            res = date.setMilliseconds();
            break;
          case (prefix + "minute.set"):
            res = date.setMinutes();
            break;
          case (prefix + "month.set"):
            res = date.setMonth();
            break;
          case (prefix + "second.set"):
            res = date.setSeconds();
            break;
          case (prefix + "time.set"):
            res = date.setTime();
            break;
          case (prefix + "UTC.set"):
            res = date.setUTCDate();
            break;
          case (prefix + "year.UTC.set"):
            res = date.setUTCFullYear();
            break;
          case (prefix + "hour.UTC.set"):
            res = date.setUTCHours();
            break;
          case (prefix + "millisecond.UTC.set"):
            res = date.setUTCMilliseconds();
            break;
          case (prefix + "minute.UTC.set"):
            res = date.setUTCMinutes();
            break;
          case (prefix + "month.UTC.set"):
            res = date.setUTCMonth();
            break;
          case (prefix + "second.UTC.set"):
            res = date.setUTCSeconds();
            break;
            default:
              return;
    }
    fetch.innerHTML = res;
}