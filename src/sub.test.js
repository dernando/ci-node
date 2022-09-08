const sub = require('./soma');

test("sub between two numbers", () => {
    expect(sub(3,2)).toBe(1);
});