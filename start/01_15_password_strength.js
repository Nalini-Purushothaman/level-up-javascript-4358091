// Write your code here

let text = "01234567a8901A23456789";
let text1 = "asdfafdassafasfsa";
let pattern = /(?=.+[0-9])(?=.+[a-z])(?=.+[A-Z])(?=.{8,})/; 
let result = pattern.test(text);
result ? document.getElementById("demo").innerHTML = "true":document.getElementById("demo").innerHTML = "false";
//document.getElementById("demo").innerHTML = result;