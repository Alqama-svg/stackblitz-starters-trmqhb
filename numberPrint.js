for (let i = 1; i <= 100; i++) {
  // Check if the number is a multiple of both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('amazon');
  } else if (i % 3 === 0) {
    // Check if the number is a multiple of 3
    console.log('google');
  } else if (i % 5 === 0) {
    // Check if the number is a multiple of 5
    console.log('facebook');
  } else {
    console.log(i); // Print the number if it doesn't meet any of the conditions
  }
}