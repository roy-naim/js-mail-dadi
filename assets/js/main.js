var emails = ["roy@mail.com", "elena@mail.com", "joe@mail.com"]

var my_email = prompt("What's your mail?");
var flag = false;
for (var i = 0; i < emails.length; i++) {
  if  (emails[i] == my_email) {
    flag = true
  }
}
//flag is something that u can stop the loop after u've writtern ur mail
if (flag) {
  console.log("Your mail is here.")
}else {
  console.log("Sorry, you're not subscribed yet.")
}
