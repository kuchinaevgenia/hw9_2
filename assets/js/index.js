function pow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("params must be numbers");
  }
  if (exponent < 0 || !Number.isSafeInteger(exponent)) {
    throw new RangeError("exponent must be positive and integer");
  }
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}
try {
  console.log(pow(3, 3));
} catch (err) {
  if (err instanceof TypeError) {
    console.log("TypeError handling");
  } else if (err instanceof RangeError) {
    console.log("RangeError handling");
  } else {
    console.log("Error handling");
  }
}
