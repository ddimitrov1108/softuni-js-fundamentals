function addAndSubtract(n1, n2, n3) {
  function sum(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }

  console.log(subtract(sum(n1, n2), n3));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
