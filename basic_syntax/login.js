function login(arr) {
  const username = arr.splice(0, 1).join("");

  for (let i = 0; i < arr.length; i++) {
    if (username === arr[i].split("").reverse().join(""))
      console.log(`User ${username} logged in.`);
    else if (i + 1 === 4) console.log(`User ${username} blocked!`);
    else console.log("Incorrect password. Try again.");
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
