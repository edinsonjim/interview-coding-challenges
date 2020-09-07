var NOT_IMPLEMENTED = undefined;

/*
  Scrivi il codice per il metodo 'fizzBuzz' che accetta un valore in input.
  
  dove:
    1. se il valore è multiplo di 3, return "Fizz" invece del numero.
    2. se il valore è multiplo di 5, return "Buzz" invece del numero.
    3. Per i numeri che sono multipli di 3 e 5, return "FizzBuzz" invece del numero.
    4. altrimenti restituisce il valore di input.
*/
var problems = {
  fizzBuzz: function(i) {
    if (i % 15 == 0) {
    	return "FizzBuzz";
    } else if (i % 3 == 0) {
        return "Fizz";
    } else if (i % 5 == 0) {
    	return "Buzz";
    } else {
    	return i;
    }   
  }
}

describe("Fizz Buzz Problem", () => {
  
  it("fizzBuzz method should be implemented", () => {
    expect(problems.fizzBuzz).toBeDefined()
  })

  it("fizzBuzz method should be 1", () => {
    expect(problems.fizzBuzz(1)).toEqual(1)
  })

  it("fizzBuzz method should be 2", () => {
    expect(problems.fizzBuzz(2)).toEqual(2);
  });
 
 it("fizzBuzz method should be Fizz", () => {
    expect(problems.fizzBuzz(3)).toEqual("Fizz");
  });
  
  it("fizzBuzz method should be 4", () => {
    expect(problems.fizzBuzz(4)).toEqual(4);
  });
  
  it("fizzBuzz method should be Buzz", () => {
    expect(problems.fizzBuzz(5)).toEqual("Buzz");
  });
  
  it("fizzBuzz method should be FizzBuzz", () => {
    expect(problems.fizzBuzz(15)).toEqual("FizzBuzz");
  });

})