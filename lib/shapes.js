class Shapes {
    constructor(textColor, logoCharacters, shapeColor) {
        this.textColor = textColor; 
        this.logoText = logoCharacters; 
        this.shapeColor = shapeColor;
    }

}

class Circle extends Shapes {
    constructor (textColor, logoText, shapeColor) {
        super(textColor, logoText, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
};


class Square extends Shapes {
    constructor (textColor, logoText, shapeColor) {
        super(textColor, logoText, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120"
        r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}


class Triangle extends Shapes {
    constructor (textColor, logoText, shapeColor) {
        super(textColor, logoText, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182"
        r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

module.exports = { Triangle, Circle, Square }