const soma = require('./soma');

test("sum between two numbers", () => {
    expect(soma(3,2)).toBe(5);
});