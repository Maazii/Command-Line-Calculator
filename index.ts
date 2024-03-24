#! /usr/bin/env node

import inquirer from "inquirer";

console.log(
  "--------------------------------------------------------------------"
);
console.log(
  "--------------------------------------------------------------------"
);
console.log(
  "--------------------------------------------------------------------"
);

console.log(
  "Welcome to your basic calculator! Please begin by entering the two numbers you wish to work with."
);

console.log("");
console.log("");

const holder = await inquirer.prompt([
  {
    message: "Please enter your first number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Please enter your second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "What function do you wish to apply?",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (holder.operator === "Addition") {
  const answer = holder.firstNumber + holder.secondNumber;
  console.log(
    `${holder.operator} of ${holder.firstNumber} and ${holder.secondNumber} is: ${answer}`
  );
} else if (holder.operator === "Subtraction") {
  const answer = holder.firstNumber - holder.secondNumber;
  console.log(
    `${holder.operator} of ${holder.firstNumber} and ${holder.secondNumber} is: ${answer}`
  );
} else if (holder.operator === "Multiplication") {
  const answer = holder.firstNumber * holder.secondNumber;
  console.log(
    `${holder.operator} of ${holder.firstNumber} and ${holder.secondNumber} is: ${answer}`
  );
} else {
  const answer = holder.firstNumber / holder.secondNumber;
  console.log(
    `${holder.operator} of ${holder.firstNumber} and ${holder.secondNumber} is: ${answer}`
  );
}
