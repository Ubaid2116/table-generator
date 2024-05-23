#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Maths table genrator agr ham 5 ka table bolein wo 1 se 5 tak krdy print
console.log(
  chalk.bgMagentaBright.italic.bold(
    "\n\tWelcome to the Muhammad Ubaid - Table Generator!\n\t"
  )
);
let userInput = await inquirer.prompt([
  {
    name: "number",
    type: "number",
    message: "Enter the number for which you want to generate the table:",
  },
]);
console.log(
  chalk.bgBlueBright.bold.italic(
    `\n\tGenerating tables from 1 to ${userInput.number}:\n\t`
  )
);
for (let n = 1; n <= userInput.number; n++) {
  console.log(chalk.bgYellowBright.bold.italic(`\n\tTable for ${n}:\n\t`));
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
