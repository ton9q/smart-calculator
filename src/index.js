class SmartCalculator {
  constructor(initialValue) {
    this.expression = [initialValue];
  }

  add(number) {
    this.expression.push('+', number);
    return this;
  }
  
  subtract(number) {
    this.expression.push('-', number);
    return this;
  }

  multiply(number) {
    this.expression.push('*', number);  
    return this;
  }

  devide(number) {
    this.expression.push('/', number);
    return this;
  }

  pow(number) {
    this.expression.push('**', number);
    return this;
  }

  valueOf() {
    return eval(this.expression.join(''));
  }
}

module.exports = SmartCalculator;
