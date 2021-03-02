var emails = ["roy@mail.com", "elena@mail.com", "joe@mail.com"]

var my_email = prompt("What's your mail?");
for (var i = 0; i < emails.length; i++) {
  if (my_email[i]) {
    console.log(emails[i])
  }
}
