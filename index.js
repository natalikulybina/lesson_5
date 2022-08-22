const firstNumber = parseInt(prompt('Enter first number:', ''));
const operator = prompt('Enter operator */+-: ', '');
const secondNumber = parseInt(prompt('Enter second number:', ''));

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {

  alert(`Wrong number value`);

} else if (operator === "*") {

  const result = firstNumber * secondNumber;
  alert(`Your result is ${result}.`);

} else if (operator === "/") {

  const result = firstNumber / secondNumber;
  alert(`Your result is ${result}.`);

} else if (operator === "+") {

  const result = firstNumber + secondNumber;
  alert(`Your result is ${result}.`);

} else if (operator === "-") {

  const result = firstNumber - secondNumber;
  alert(`Your result is ${result}.`);

}
else {

  alert("This operation is not exist");

}