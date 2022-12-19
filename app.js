const express = require('express');
const bcrypt = require('bcrypt');
const password="12345"

const app = express();
async function hashFunc(plainText) {
  const user = {
    name: "sOhan",
    email: "sohan@gmail.com",
    password: plainText
  };
  // generate crypt

  user.password = await bcrypt.hash(plainText, 10);
  console.log(user);
}
// recive password and compare
async function comparePassord(plainText, hash) {
  const isMatch = await bcrypt.compare(plainText, hash);
  if (isMatch) {
    console.log("password is matched");
  } else {
    console.log("not matched");
  }
}

hashFunc(password);
comparePassord(
  "12345",
  "$2a$10$RNnWUo/ueBAx3zXJ7kRekeActJ2zWlHpUoaBKi6SBbK3w/9lLXYka"
);

app.listen(5000,()=> console.log("server is running") )