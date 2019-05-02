function cardValidator(stringCardNumber){
    let cardNumber = stringCardNumber.split("").map(Number);
     if (cardNumber.length < 16 || cardNumber.length > 16 || cardNumber.every(digit => digit === cardNumber[0])) {
      //  console.log("cartão inválido");
         return false
       } else {
        //  console.log("cartão válido");
         luhnAlgorithm(cardNumber);
        return true 
       }       
    
   }
   
   function luhnAlgorithm(cardNumber){
     let checkDigit = cardNumber[15];
     cardNumber.pop(15)
     let newArray = [];
     // for (index in cardNumber) {
     // console.log(index);
   for ([index, value] of cardNumber.entries()) {
     if (index % 2 === 0){
         if(value * 2 >= 10 ){
         let conta = 0;
         conta = value * 2 - 9
         newArray.push(conta); 
       }else{
         newArray.push(value * 2);
       }  
     }else{
   newArray.push(value);
     }
   }
  //  console.log(newArray);
   finalOperation(newArray, checkDigit);
   return newArray;
   }
   
    function finalOperation(newArray, checkDigit){
     let finalsum = newArray.reduce((acc, elem) =>{
        return acc + elem
       },)
        
     let mod = 10 - (finalsum % 10);
      
    if (checkDigit === mod){
      return true
    }else{
      return false
    } 
   }
   
    module.exports.cardValidator = cardValidator;

