#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer";

// creating a class for player and opponent
class player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  // fuel setting decrease
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  //fuel increase only in player class
  fuelIncrease() {
    this.fuel = 100;
  }
}

class opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  // fuel setting as same as for player
  fuelDecrease() {
    let fuel = this.fuel - 40;
    this.fuel = fuel;
  }
}
// user input
let question = await inquirer.prompt([
  {
    name: "user",
    type: "input",
    message:"Enter your name to start the game : ",
  },
]);
let oponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "select your opponent : ",
    choices: ["tony", "stark", "zombie"],
  },
]);

//creae variable name p1/O1  and save player and opponet name in it
let p1 = new player(player.name);
let O1 = new opponent(oponent.select);

//condition
do {
    if (oponent.select == "tony"){
        let ques = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "\n\tWhat would you like to do Next :",
                choices: ["ATTACK", "DRINKPORTION", "RUN"],
            
            },
        
        ]);
        if (ques.options == "ATTACK") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDecrease();
                console.log(`\t${p1.name}fuel is ${p1.fuel} `);
                console.log(`\t${O1.name}fuel is ${O1.fuel} `);
                if (p1.fuel <= 0) {
                    console.log("\n\t******BETTER LUCK NEXT TIME******");
                    process.exit();
                }
            }
            if (number <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel} `);
                console.log(`${O1.name}fuel is ${O1.fuel} `);
                if (O1.fuel <= 0) {
                    console.log("\n****** CONGRTSS : YOU WIN THE GAME!******");
                    process.exit();
                }
                }
            }
            if (ques.options == "DRINKPORTION") {
                p1.fuelIncrease();
                console.log(`\t\nYOU DRINK HEALTHY PORTION, YOUR FUEL IS ${p1.fuel}`);
            if (ques.options == "RUN") {
                console.log("\n***********BETTER LUCK NEXT TIME**************");
                process.exit();
            }
        }
        }
//stark
if (oponent.select == "stark") {
    let ques = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "what would you like to do",
            choices: ["ATTACK", "DRINKPORTION", "RUN"],
        },
    ]);
    if (ques.options == "ATTACK") {
        let number = Math.floor(Math.random() * 2);
        if (number > 0) {
            p1.fuelDecrease();
            console.log(`${p1.name}fuel is ${p1.fuel} `);
            console.log(`${O1.name}fuel is ${O1.fuel} `);
            if (p1.fuel <= 0) {
                console.log("\n******BETTER LUCK NEXT TIME******");
                process.exit();
            }
        }
        if (number <= 0) {
            O1.fuelDecrease();
            console.log(`${p1.name}fuel is ${p1.fuel} `);
            console.log(`${O1.name}fuel is ${O1.fuel} `);
            if (O1.fuel <= 0) {
                console.log("\n****** CONGRTSS : YOU WIN THE GAME!******");
                process.exit();
            }
            }
        }
        if (ques.options == "DRINKPORTION") {
            p1.fuelIncrease();
            console.log(`YOU DRINK HEALTH PORTION, YOUR FUEL IS ${p1.fuel}`);
        }
        if (ques.options == "RUN") {
            console.log("***********BETTER LUCK NEXT TIME**************");
            process.exit();
        }
    }
    //zombie
    if (oponent.select == "zombie"){
        let ques = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "what would you like to do",
                choices: ["ATTACK", "DRINKPORTION", "RUN"],
            },
        ]);
        if (ques.options == "ATTACK") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel} `);
                console.log(`${O1.name}fuel is ${O1.fuel} `);
                if (p1.fuel <= 0) {
                    console.log("\n******BETTER LUCK NEXT TIME******");
                    process.exit();
                }
            }
            if (number <= 0) {
                O1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel} `);
                console.log(`${O1.name}fuel is ${O1.fuel} `);
                if (O1.fuel <= 0) {
                    console.log("\n****** CONGRTSS : YOU WIN THE GAME!******");
                    process.exit();
                }
                }
            }
            if (ques.options == "DRINKPORTION") {
                p1.fuelIncrease();
                console.log(`YOU DRINK HEALTH PORTION, YOUR FUEL IS ${p1.fuel}`);
            }
            if (ques.options == "RUN") {
                console.log("***********BETTER LUCK NEXT TIME**************");
                process.exit();
            }
        }

    }
    while (true)
