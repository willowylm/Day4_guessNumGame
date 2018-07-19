let guessNum = require("./guessNum.js")

describe('guessNum', function () {
  it('should return 4A0B for input 1 2 3 4 when answer is 1 2 3 4 ', function () {
    expect(new guessNum().test('1 2 3 4')).toEqual('4A0B');
  });

  it('should return 1A0B for input 1 5 6 7 when answer is 1 2 3 4 ', function () {
    expect(new guessNum().test('1 5 6 7')).toEqual('1A0B');
  });

  it('should return 0A2B for input 2 4 7 8 when answer is 1 2 3 4 ', function () {
    expect(new guessNum().test('2 4 7 8')).toEqual('0A2B');
  });

  it('should return 0A2B for input 0 3 2 4 when answer is 1 2 3 4 ', function () {
    expect(new guessNum().test('0 3 2 4')).toEqual('1A2B');
  });

  it('should return 0A2B for input 5 6 7 8 when answer is 1 2 3 4 ', function () {
    expect(new guessNum().test('5 6 7 8')).toEqual('0A0B');
  });

  it('should return 0A2B for input 5 6 7 8 when answer is 1 2 3 4 ', function () {
    let random = 
    expect(new guessNum().test('5 6 7 8')).toEqual('0A0B');
  });

  
});

