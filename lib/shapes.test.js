const { Circle, Triangle, Square } = require("./shapes.js"); 


describe('Circle', () => {
    it('should create a Circle with user inputs', () => {
        var shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="yellow" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
      
      </svg>`);

    });
});


describe('Square', () => {
    it('should create a square with user inputs', () => {
        var shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120"
        r="80" fill="blue" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
      
      </svg>`);
    });
});


describe('Triangle', () => {
    it('should create a triangle with user inputs', () => {
        var shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182"
        r="80" fill="green" />
      
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
      
      </svg>`);
    });

});

