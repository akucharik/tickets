
/**
* Date instance methods
*
* @author Ken Snyder (ken d snyder at gmail dot com)
* @date 2008-04-21
* @version 2.0 (http://kendsnyder.com/sandbox/date/)
* @license Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
*/
(function() {
var day = 24 * 60 * 60 * 1000;
var zeroPad = function(number, digits) {
number = String(number);
while (number.length < digits) number = '0' + number;
return number;
};
var multipliers = {
millisecond: 1,
second: 1000,
minute: 60 * 1000,
hour: 60 * 60 * 1000,
day: day,
week: 7 * day,
month: {
add: function(d, number) {
multipliers.year.add(d, Math[number > 0 ? 'floor' : 'ceil'](number / 12));
var prevMonth = d.getMonth() + (number % 12);
prevMonth = prevMonth == 12 ? 0 : (prevMonth == -1 ? 11 : prevMonth);
d.setMonth(prevMonth);
},
diff: function(d1, d2) {
var diffYears = d1.getFullYear() - d2.getFullYear();
var diffMonths = d1.getMonth() - d2.getMonth() + (diffYears * 12);
var diffDays = d1.getDate() - d2.getDate();
return diffMonths + (diffDays / 30);
}
},
year: {
add: function(d, number) {
d.setYear(d.getFullYear() + Math[number > 0 ? 'floor' : 'ceil'](number));
},
diff: function(d1, d2) {
return multipliers.month.diff(d1, d2) / 12;
}
}
};
for (var unit in multipliers) {
if (unit.substring(unit.length - 1) != 's') {
multipliers[unit + 's'] = multipliers[unit];
}
}
var format = function(d, code) {
if (Date.prototype.strftime.formatShortcuts[code]) {
return d.strftime(Date.prototype.strftime.formatShortcuts[code]);
} else {
var getter = (Date.prototype.strftime.formatCodes[code] || '').split('.');
var nbr = d['get' + getter[0]] ? d['get' + getter[0]]() : '';
if (getter[1]) nbr = zeroPad(nbr, getter[1]);
return nbr;
}
};
var instanceMethods = {
succ: function(unit) {
return this.clone().add(1, unit);
},
add: function(number, unit) {
var factor = multipliers[unit] || multipliers.day;
if (typeof factor == 'number') {
this.setTime(this.getTime() + (factor * number));
} else {
factor.add(this, number);
}
return this;
},
diff: function(dateObj, unit, allowDecimal) {
dateObj = Date.create(dateObj);
if (dateObj === null) return null;
var factor = multipliers[unit] || multipliers.day;
if (typeof factor == 'number') {
var unitDiff = (this.getTime() - dateObj.getTime()) / factor;
} else {
var unitDiff = factor.diff(this, dateObj);
}
return (allowDecimal ? unitDiff : Math[unitDiff > 0 ? 'floor' : 'ceil'](unitDiff));
},
strftime: function(formatStr) {
var source = formatStr || '%Y-%m-%d', result = '', match;
while (source.length > 0) {
if (match = source.match(Date.prototype.strftime.formatCodes.matcher)) {
result += source.slice(0, match.index);
result += (match[1] || '') + format(this, match[2]);
source = source.slice(match.index + match[0].length);
} else {
result += source, source = '';
}
}
return result;
},
getShortYear: function() {
return this.getYear() % 100;
},
getMonthNumber: function() {
return this.getMonth() + 1;
},
getMonthName: function() {
return Date.MONTHNAMES[this.getMonth()];
},
getAbbrMonthName: function() {
return Date.ABBR_MONTHNAMES[this.getMonth()];
},
getDayName: function() {
return Date.DAYNAMES[this.getDay()];
},
getAbbrDayName: function() {
return Date.ABBR_DAYNAMES[this.getDay()];
},
getDayOrdinal: function() {
return Date.ORDINALNAMES[this.getDate() % 10];
},
getHours12: function() {
var hours = this.getHours();
return hours > 12 ? hours - 12 : (hours == 0 ? 12 : hours);
},
getAmPm: function() {
return this.getHours() >= 12 ? 'PM' : 'AM';
},
getUnix: function() {
return Math.round(this.getTime() / 1000, 0);
},
getGmtOffset: function() {
var hours = this.getTimezoneOffset() / 60;
var prefix = hours < 0 ? '+' : '-';
hours = Math.abs(hours);
return prefix + zeroPad(Math.floor(hours), 2) + ':' + zeroPad((hours % 1) * 60, 2);
},
getTimezoneName: function() {
var match = /(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());
return match[1] || match[2] || 'GMT' + this.getGmtOffset();
},
toYmdInt: function() {
return (this.getFullYear() * 10000) + (this.getMonthNumber() * 100) + this.getDate();
},
clone: function() {
return new Date(this.getTime());
}
};
for (var name in instanceMethods) Date.prototype[name] = instanceMethods[name];
var staticMethods = {
create: function(date) {
if (date instanceof Date) return date;
if (typeof date == 'number') return new Date(date * 1000);
var parsable = String(date).replace(/^\s*(.+)\s*$/, '$1'), i = 0, length = Date.create.patterns.length, pattern;
var current = parsable;
while (i < length) {
ms = Date.parse(current);
if (!isNaN(ms)) return new Date(ms);
pattern = Date.create.patterns[i];
if (typeof pattern == 'function') {
obj = pattern(current);
if (obj instanceof Date) return obj;
} else {
current = parsable.replace(pattern[0], pattern[1]);
}
i++;
}
return NaN;
},
MONTHNAMES      : 'January February March April May June July August September October November December'.split(' '),
ABBR_MONTHNAMES : 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
DAYNAMES        : 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
ABBR_DAYNAMES   : 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
ORDINALNAMES    : 'th st nd rd th th th th th th'.split(' '),
ISO: '%Y-%m-%dT%H:%M:%S.%N%G',
SQL: '%Y-%m-%d %H:%M:%S',
daysInMonth: function(year, month) {
if (month == 2)
return new Date(year, 1, 29).getDate() == 29 ? 29 : 28;
return [undefined,31,undefined,31,30,31,30,31,31,30,31,30,31][month];
}
};
for (var name in staticMethods) Date[name] = staticMethods[name];
Date.prototype.strftime.formatCodes = {
matcher: /()%(#?(%|[a-z]))/i,
Y: 'FullYear',
y: 'ShortYear.2',
m: 'MonthNumber.2',
'#m': 'MonthNumber',
B: 'MonthName',
b: 'AbbrMonthName',
d: 'Date.2',
'#d': 'Date',
e: 'Date',
A: 'DayName',
a: 'AbbrDayName',
w: 'Day',
o: 'DayOrdinal',
H: 'Hours.2',
'#H': 'Hours',
I: 'Hours12.2',
'#I': 'Hours12',
p: 'AmPm',
M: 'Minutes.2',
'#M': 'Minutes',
S: 'Seconds.2',
'#S': 'Seconds',
s: 'Unix',
N: 'Milliseconds.3',
'#N': 'Milliseconds',
O: 'TimezoneOffset',
Z: 'TimezoneName',
G: 'GmtOffset'
};
Date.prototype.strftime.formatShortcuts = {
F: '%Y-%m-%d',
T: '%H:%M:%S',
X: '%H:%M:%S',
x: '%m/%d/%y',
D: '%m/%d/%y',
'#c': '%a %b %e %H:%M:%S %Y',
v: '%e-%b-%Y',
R: '%H:%M',
r: '%I:%M:%S %p',
t: '\t',
n: '\n',
'%': '%'
};
Date.create.patterns = [
[/-/g, '/'],
[/st|nd|rd|th/g, ''],
[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/, '$2/$1/$3'],
[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/, '$2/$3/$1'],
function(str) {
var match = str.match(/^(?:(.+)\s+)?([1-9]|1[012])(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d))?\s*(am|pm)\s*$/i);
if (match) {
if (match[1]) {
var d = Date.create(match[1]);
if (isNaN(d)) return;
} else {
var d = new Date();
d.setMilliseconds(0);
}
var hour = parseFloat(match[2]);
hour = match[5].toLowerCase() == 'am' ? (hour == 12 ? 0 : hour) : (hour == 12 ? 12 : hour + 12);
d.setHours(hour, parseFloat(match[3] || 0), parseFloat(match[4] || 0));
return d;
}
}
];
})();
var $D = Date.create;
