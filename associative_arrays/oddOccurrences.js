function oddOccurrences(str) {
  const arr = str.split(" ").map((s) => s.toLowerCase());
  const result = [];

  arr.forEach((el) => {
    const count = arr.reduce((acc, val) => (acc += val === el ? 1 : 0), 0);
    
    if (count % 2 && !result.includes(el)) result.push(el);
  });

  console.log(result.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
