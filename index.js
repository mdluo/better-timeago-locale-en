/**
 * Better Timeago English Locale
 * (C) 2016 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

module.exports = {
  fecha: {
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    amPm: ['am', 'pm'],
    // D is the day of the month, function returns something like...  3rd or 11th
    DoFn: function (D) {
        return D + [ 'th', 'st', 'nd', 'rd' ][ D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10 ];
    }
  },
  units: {
    moment:   ["Just now", "Just now", ""],
    second:   [" second", "s", "s"],
    minute:   [" minute", "m", "s"],
    hour:     [" hour", "h", "s"],
    day:      [" day", "d", "s"],
    week:     [" week", " week", "s"],
    month:    [" month", " month", "s"],
    year:     [" year", " year", "s"]
  },
  types: {
    relative: {
      ago:     " ago",
      in:      "In",
    },
    absolute: [
      {k: 'now', v: [{f: true, s: "YYYY/M/D HH:mm"}]},
      {k: 'today', v: [{s: "Today"}, {f: true, s:" HH:mm"}]},
      {k: 'yesterday', v: [{s: "Yesterday"}, {f: true, s: " HH:mm"}]},
      //{k: 'thisWeek', v: [{f: true, s: "dddd"}]},
      //{k: 'lastWeek', v: [{s: "Last"}, {f: true, s:" ddd"}]},
      {k: 'thisYear', v: [{f: true, s: "MMM Do"}]},
      {k: 'epoch', v: [{f: true, s: "YYYY/M/D"}]}
    ],
  },
  startOfWeek:  0,
  errors: {
    dafault:    "Unknow time"
  }
}
