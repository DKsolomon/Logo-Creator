const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");


function run() {
    inquirer
     .prompt ([
       
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter 3 characters',
            
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like to set the text? (Enter keyword or hex value)',
           
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you the shape to be? (Enter keyword or hex value',     
           
        },
        {
            type: 'input',
            name: 'logoShape',
            message: 'Select A Shape',
            choices: [ 'Square', 'Circle', 'Triangle'],
          
        }
      ])
    }