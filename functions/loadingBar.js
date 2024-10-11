function loadingBar(n) {
  if (n < 100) {
    console.log(`${n}% [${"%".repeat(n / 10)}${".".repeat(10 - n / 10)}]`);
    console.log("Still loading...");
  } else {
    console.log(`${n}% Complete!`);
    console.log(`[${"%".repeat(n / 10)}]`);
  }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
