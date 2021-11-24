//W.A.P  to enter email address and print username and Domain name seprate
var email = "shubhamkeshri1997@gmail.com";
var name1 = email.substring(0, email.lastIndexOf("@"));
var domain = email.substring(email.lastIndexOf("@"));
console.log(name1);
console.log(domain);
