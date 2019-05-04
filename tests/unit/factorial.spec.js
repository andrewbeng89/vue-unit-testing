/** The factorial! 😂 function
 * i.e. the product of all positive integers
 * less than or equal to n
 */
const factorial = n => {
  let result = 1;
  for (let i = 0; i < n; i += 1) {
    const multiplier = i + 1;
    result *= multiplier;
  }
  return result;
};

describe("The factorial function", () => {
  // Assertion that factorial! is working
  it("Should return the nth factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });
});
