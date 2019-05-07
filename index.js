function cardValidator (number) {
  let cardNumber = number.toString().replace(/\D/g, '').split('').map(Number);
  if (cardNumber.length < 16 && cardNumber.length > 16 || cardNumber.every(digit => digit === cardNumber[0])) {
    return false;
  } 
  return luhnAlgorithm(cardNumber); 
}       

    
function luhnAlgorithm (cardNumber) {
  let checkDigit = cardNumber[15];
  cardNumber.pop(15);
  let newArray = [];
  for ([index, value] of cardNumber.entries()) {
    if (index % 2 === 0) {
      if (value * 2 >= 10) {
        let result = 0;
        result = value * 2 - 9;
        newArray.push(result); 
      } else {
        newArray.push(value * 2);
      }  

    } else {
      newArray.push(value);
    }
  }
  return finalOperation(newArray, checkDigit);
  
}
   
function finalOperation (newArray, checkDigit) {
  let finalsum = newArray.reduce((acc, elem) =>{
    return acc + elem;
  },);
        
  let mod = 10 - (finalsum % 10);
      
  if (checkDigit === mod) {
    return true;
  } 
  return false;
} 

  
module.exports.cardValidator = cardValidator;

