
it('should calculate the monthly rate correctly', function() {

  // ...
  const test = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(test)).toEqual('130.44')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const test = { 
    amount: 10043,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(test)).toEqual('131.00')
});

/// etc
