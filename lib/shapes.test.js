const { Circle, Triangle, Square } = require("./shapes.js"); 


describe('Circle', () => {
    it('should create a Circle with user inputs', () => {
        var shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="100" r="80" fill="yellow"/>`);

    });
});


describe('Square', () => {
    it('should create a square with user inputs', () => {
        var shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            `<rect x="90" y="40" width="120" height="120" fill="blue"/>`);
    });
});


describe('Triangle', () => {
    it('should create a triangle with user inputs', () => {
        var shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="green" />`);
    });

});

