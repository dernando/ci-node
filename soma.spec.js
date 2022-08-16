const Soma = require('./soma');

test("test soma between two numbers", () => {
    expect(Soma(3,2)).toBe(5);
});