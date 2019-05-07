/** The factorial! 😂 function
 * i.e. the product of all positive integers
 * less than or equal to n
 */
const factorial = n => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

describe("The factorial function", () => {
  // Assertion that factorial! is working
  it("Should return the nth factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });
});
