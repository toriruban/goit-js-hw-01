function makeTransaction (quantity, pricePerDroit){
    return(`You ordered ${quantity} droids worth ${quantity * pricePerDroit} credits!`);
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


function makeMessage (name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`;
      // Change code above this line
      return message;
    };