
function takeYear(theDate){
x = theDate.getYear();
var y = x % 100;
y += (y < 38) ? 2000 : 1900;
return y;
}
date = new Date();
cyear = takeYear(date);
cmonth = date.getMonth() + 1;
cday = date.getDate();
marray = new Array();
marray[0] = new Option('Jan', 1);
marray[1] = new Option('Feb', 2);
marray[2] = new Option('Mar', 3);
marray[3] = new Option('Apr', 4);
marray[4] = new Option('May', 5);
marray[5] = new Option('Jun', 6);
marray[6] = new Option('Jul', 7);
marray[7] = new Option('Aug', 8);
marray[8] = new Option('Sept', 9);
marray[9] = new Option('Oct', 10);
marray[10] = new Option('Nov', 11);
marray[11] = new Option('Dec', 12);
mdays = new Array();
mdays[0] = 31;
mdays[2] = 31;
mdays[3] = 30;
mdays[4] = 31;
mdays[5] = 30;
mdays[6] = 31;
mdays[7] = 31;
mdays[8] = 30;
mdays[9] = 31;
mdays[10] = 30;
mdays[11] = 31;
darray = new Array();
for (i = 0; i < 31; i++){
darray[i] = new Option(i+1, i+1);
}
function leapCheck(year){
if ((year % 4 == 0) && !(year % 400 == 0)) return 29;
else return 28;
}
function dim(mv, yv) {
if (mv == 2) days_in_month = leapCheck(yv);
else days_in_month = mdays[mv - 1];
return(days_in_month);
}
function yearlist(field, start_year, start_month){
for (i = 0; i < 2 ; i++){
document.browse[field].options[i] = null;
}
for (i = cyear; i <= cyear + 2; i++){
document.browse[field].options[i - cyear] = new Option(i, i);
}
document.browse[field].selectedIndex = start_year - cyear;
monthlist(document.browse, start_month, (field+1));
}
function monthlist(form, start_month, field){
year_value = form[field-1].options[form[field-1].selectedIndex].value;
while (document.browse[field].options[0] != null){
for (i = 0; i < document.browse[field].options.length; i++){
document.browse[field].options[i] = null;
}
}
if (year_value == cyear){
for (i = cmonth; i <= 12; i++){
document.browse[field].options[i-cmonth] = new Option(marray[i-1].text, marray[i-1].value);
}
}
else {
for (i = 0; i < 12; i++){
document.browse[field].options[i] = new Option(marray[i].text, marray[i].value);
}
}
if (start_month == 99){
document.browse[field].selectedIndex = 0;
}
else if (year_value == cyear){
document.browse[field].selectedIndex = start_month - cmonth;
}
else{
document.browse[field].selectedIndex = start_month - 1;
}
daylist(document.browse, (field+1));
}
function daylist(form, field){
year_value = form[field-2].options[form[field-2].selectedIndex].value;
month_value = form[field-1].options[form[field-1].selectedIndex].value;
days_in_month = dim(month_value, year_value);
while (document.browse[field].options[0] != null){
for (i = 0; i < document.browse[field].options.length; i++){
document.browse[field].options[i] = null;
}
}
if ((month_value == (cmonth)) && (year_value == cyear)){
for (i = cday; i <= days_in_month; i++){
document.browse[field].options[i-cday] = new Option(i, i);
}
}
else {
for (i = 1; i <= days_in_month; i++){
document.browse[field].options[i-1] = new Option(i, i);
}
}
document.browse[field].selectedIndex = 0;
}
function check_for_range(form){
if (form.rdc_select.options[form.rdc_select.selectedIndex].value == "range") {
if(document.browse[0].value.indexOf("enter city or zip code")!=-1){
document.browse[0].value="";
}
rday = cday + 7;
rmonth = cmonth;
ryear = cyear;
days_in_month = dim(rmonth, ryear);
if ((rday) > days_in_month) {
rday = rday - days_in_month;
if (rmonth + 1 > 12) {
ryear += 1;
rmonth = 1;
}
else rmonth += 1;
}
rcat = form.category.options[form.category.selectedIndex].value;
rarea = form.area.value;
if(document.browse.teVal){
document.location = "/exchange/buy/browse?category=" + rcat + "&area=" + rarea + "&rdc_syear=" + cyear + "&rdc_smonth=" + cmonth + "&rdc_sday=" + cday + "&rdc_eyear=" + ryear + "&rdc_emonth=" + rmonth + "&rdc_eday=" + rday + "&type=range";
}else{
switch(rcat){
case '16':
document.location = "/broadway?tm_link=tm_home_browse";
case '17':
document.location = "/offbroadway?tm_link=tm_home_browse";
default:
document.location = "/browse?category=" + rcat + "&area=" + rarea + "&rdc_syear=" + cyear + "&rdc_smonth=" + cmonth + "&rdc_sday=" + cday + "&rdc_eyear=" + ryear + "&rdc_emonth=" + rmonth + "&rdc_eday=" + rday + "&type=range";
}
}
}
}
function set_field(field_index, handed_var) {
var i=0;
var field_len = document.browse[field_index].length;
while ((i != field_len) && (document.browse[field_index].options[i].value != handed_var)){
i += 1;
}
if (i == field_len){
i = 0;
}
document.browse[field_index].selectedIndex = i;
}
function init_range(cat, sy, sm, sd, ey, em, ed){
yearlist(2, sy, sm);
yearlist(5, ey, em);
rdc_arr = new Array();
rdc_arr[0] = cat;
rdc_arr[2] = sy;
rdc_arr[3] = sm;
rdc_arr[4] = sd;
rdc_arr[5] = ey;
rdc_arr[6] = em;
rdc_arr[7] = ed;
for (k=0; k < rdc_arr.length ; k++){
if (k != 1){
set_field(k, rdc_arr[k]);
}
}
}
function init_selected(cat, select){
set_field(1, cat);
set_field(2, select);
}
function init_box(cat, select){
set_field(1, cat);
set_field(2, select);
}
