var NOT_IMPLEMENTED = undefined;

/*
  I numeri di Fibonacci sono i numeri tali che ogni numero della serie dopo i primi due è la somma dei due precedenti. 
  esempio: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …. 

  Scrivi il codice per il metodo 'challenges.fibonacci' che accetta un valore in input,
  deve restituire il numero di Fibonacci all'ennesima sequenza.
*/
var challenges = {
  fibonacci: NOT_IMPLEMENTED
}

describe("Fibonacci Challenge", () => {
  it("fibonacci method should be implemented", function () {
    expect(challenges.fibonacci).toBeDefined();
  });

  it("fibonacci number to the nth(1) sequence should be 1", function () {
    expect(challenges.fibonacci(2)).toEqual(1);
  });

  it("fibonacci number to the nth(5) sequence should be 3", function () {
    expect(challenges.fibonacci(5)).toEqual(3);
  });

  it("fibonacci number to the nth(8) sequence should be 13", function () {
    expect(challenges.fibonacci(8)).toEqual(13);
  });

  it("fibonacci number to the nth(9) sequence should be 21", function () {
    expect(challenges.fibonacci(9)).toEqual(21);
  });
})