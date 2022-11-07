// Start
_("#calendar").innerHTML = calendar();
 
// short queySelector
function _(s) {
  return document.querySelector(s);
}
 
// show info
function showInfo(event) {
  // link
  var url = "https://codepen.io/nakome/pen/EWBMzm.css";
  // get json
  getjson(url, function (obj) {
    for (var key in obj) {
      // if has envent add class
      if (_('[data-id="' + key + '"]')) {
        _('[data-id="' + key + '"]').classList.add("event");
      }
      if (event === key) {
        _("#calendar_data").classList.toggle("show_data");
        // template info
        var data =
          '<a href="#" class="hideEvent" ' +
          'onclick="return hideEvent();">&times;</a>' +
          "<h3>" +
          obj[key].type +
          "</h3>" +
          "<dl>" +
          "<dt><dfn>Title:</dfn></dt><dd>" +
          obj[key].title +
          "</dd>" +
          "<dt><dfn>Hour:</dfn></dt><dd>" +
          obj[key].time +
          "</dd>" +
          "<dt><dfn>Venue:</dfn></dt><dd>" +
          obj[key].venue +
          "</dd>" +
          "<dt><dfn>Location:</dfn></dt><dd>" +
          obj[key].location +
          "</dd>" +
          "<dt><dfn>Description:</dfn></dt><dd>" +
          obj[key].desc +
          "</dd>" +
          '<dt><dfn>More Info:</dfn></dt><dd><a href="' +
          obj[key].more +
          '" title="More info">Here</a></dd>' +
          "</dl>";
 
        return (_("#calendar_data").innerHTML = data);
      }
    }
  });
  return false;
}
// toggle event show or hide
function hideEvent() {
  _("#calendar_data").classList.toggle("show_data");
}
 
// simple calendar
function calendar() {
  // show info on init
  showInfo();
 
  // vars
  var day_of_week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"),
    month_of_year = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ),
    Calendar = new Date(),
    year = Calendar.getYear(),
    month = Calendar.getMonth(),
    today = Calendar.getDate(),
    weekday = Calendar.getDay(),
    html = "";
 
  // start in 1 and this month
  Calendar.setDate(1);
  Calendar.setMonth(month);
 
  // template calendar
  html = "<table>";
  // head
  html += "<thead>";
  html +=
    '<tr class="head_cal"><th colspan="7">' +
    month_of_year[month] +
    "</th></tr>";
  html +=
    '<tr class="subhead_cal"><th colspan="7">' +
    Calendar.getFullYear() +
    "</th></tr>";
  html += '<tr class="week_cal">';
  for (index = 0; index < 7; index++) {
    if (weekday == index) {
      html += '<th class="week_event">' + day_of_week[index] + "</th>";
    } else {
      html += "<th>" + day_of_week[index] + "</th>";
    }
  }
  html += "</tr>";
  html += "</thead>";
 
  // body
  html += '<tbody class="days_cal">';
  html += "</tr>";
 
  // white zone
  for (index = 0; index < Calendar.getDay(); index++) {
    html += '<td class="white_cal"> </td>';
  }
 
  for (index = 0; index < 31; index++) {
    if (Calendar.getDate() > index) {
      week_day = Calendar.getDay();
 
      if (week_day === 0) {
        html += "</tr>";
      }
      if (week_day !== 7) {
        // this day
        var day = Calendar.getDate();
        var info =
          Calendar.getMonth() + 1 + "/" + day + "/" + Calendar.getFullYear();
 
        if (today === Calendar.getDate()) {
          html +=
            '<td><a class="today_cal" href="#" data-id="' +
            info +
            '" onclick="return showInfo(\'' +
            info +
            "')\">" +
            day +
            "</a></td>";
 
          showInfo(info);
        } else {
          html +=
            '<td><a href="#" data-id="' +
            info +
            '" onclick="return showInfo(\'' +
            info +
            "')\">" +
            day +
            "</a></td>";
        }
      }
 
      if (week_day == 7) {
        html += "</tr>";
      }
    }
 
    Calendar.setDate(Calendar.getDate() + 1);
  } // end for loop
  return html;
}
 
//   Get Json data
function getjson(url, callback) {
  var self = this,
    ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        var data = JSON.parse(ajax.responseText);
        return callback(data);
      } else {
        console.log(ajax.status);
      }
    }
  };
  ajax.send();
}