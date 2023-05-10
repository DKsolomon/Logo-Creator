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
            type: 'list',
            name: 'logoShape',
            message: 'Select A Shape',
            choices: [ 'Circle', 'Square', 'Triangle'],
          
        }
      ])
    

    .then((data) => {
        const {logoText, textColor, shapeColor, logoShape} = data;
        
        let shape;
        
        switch (logoShape){
            case "circle":
                shape = new Circle(logoText, textColor, shapeColor);
                break;
            case "Square":
                shape = new Square(logoText, textColor, shapeColor);
                break;
            case "Triangle":
                shape = new Triangle(logoText, textColor, shapeColor);
                break;
        }
        
        fs.writeFile("logo.svg", shape.render(), (err) => {
            if (err) throw err;
            console.log("Generated logo.svg");
          });
        });
    }
            
run();