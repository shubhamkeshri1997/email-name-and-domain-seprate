//W.A.P  to enter email address and print username and Domain name seprate
let email:string="shubhamkeshri1997@gmail.com";
let name1:string = email.substring(0, email.lastIndexOf("@"));
let domain = email.substring(email.lastIndexOf("@") );

console.log( name1 );   
console.log( domain );