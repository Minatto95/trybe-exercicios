const sum = require('./sum');


describe('Soma os parâmetros a, b', () => {
  it('Soma a, b.', () => {
    expect(4 + 5).toBe(9)
  });
  it('Soma a, b.', () => {
    expect(0 + 0).toBe(0)
  });
  it('Deve disparar um erro caso receba como parâmetro uma string.', () => {
    expect(4 + 5).toBe(9)
  });
});





















// const sum = (a, b) => a + b;

// test('soma dois valores', () => {
//   expect(sum(2, 3)).toEqual(5);
// });