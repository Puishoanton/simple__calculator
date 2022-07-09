const userInput = document.getElementById("userInput");
let expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
};

equal = () => {
  userInput.value = eval(expression);
  expression = "";
};
erase = () => {
  expression = "";
  userInput.value = expression;
};
