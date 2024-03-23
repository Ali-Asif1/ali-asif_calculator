#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { type: "number", name: "firstNum", message: chalk.greenBright("Enter your first number: ") },
    { type: "number", name: "secondNum", message: chalk.greenBright("Enter your second number: ") },
    {
        type: "list",
        name: "operator",
        message: chalk.greenBright("Select operator:"),
        choices: ["+", "-", "*", "/"],
    },
]);
if (answer.operator == "+") {
    console.log(chalk.yellow(`${answer.firstNum} ${answer.operator} ${answer.secondNum} = ${answer.firstNum + answer.secondNum}`));
}
else if (answer.operator == "-") {
    console.log(chalk.yellow(`${answer.firstNum} ${answer.operator} ${answer.secondNum} = ${answer.firstNum - answer.secondNum}`));
}
else if (answer.operator == "*") {
    console.log(chalk.yellow(`${answer.firstNum} ${answer.operator} ${answer.secondNum} = ${answer.firstNum * answer.secondNum}`));
}
else if (answer.operator == "/") {
    console.log(chalk.yellow(`${answer.firstNum} ${answer.operator} ${answer.secondNum} = ${answer.firstNum / answer.secondNum}`));
}
else {
    console.log(chalk.red("Please select valid operator"));
}
