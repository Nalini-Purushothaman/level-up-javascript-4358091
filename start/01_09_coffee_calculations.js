// Write your code here
const coffee = [2,3,1,4,3,2];
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const totalCoffeeCount = coffee.reduce(calcBill);
console.log("totalCoffeeCount:",totalCoffeeCount);
const totalBillAmount = totalCoffeeCount * 1.25;
console.log("totalBillAmount:",totalBillAmount);

function calcBill(total1, currentValue){
  return total1 = total1 + currentValue; 
}