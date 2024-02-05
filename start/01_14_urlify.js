// Write your code here
const blogPostString = "Em ma's bl/og!";
let urlifiedString = blogPostString.toLocaleLowerCase();
urlifiedString1 = urlifiedString.replace(/\s/g, '-');
urlifiedString2 = urlifiedString1.replace(/[!@#$%^&*'/]/g, "");
console.log("Original String : ",blogPostString);
console.log("Output String : ",urlifiedString2);
