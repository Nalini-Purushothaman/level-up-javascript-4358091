// Write your code here
const password1 = Symbol("password");
const user = {
  username : "abc@gmail.com",
  [password1] : "1234566",
  //passwordMatch : "1234566"
}
console.log("User Name:",user.username);
console.log("Password",user.password1);
// console.log("Password Match",user.passwordMatch);
// if(user.password1===user.passwordMatch)
//   console.log("Password Matches");
// else
//   console.log("Password doesnt match");