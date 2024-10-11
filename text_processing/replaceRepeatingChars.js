function replaceRepeatingChars(text) {
  let print = '';

  for (let i = 0; i < text.length; i++) {
    if (i === 0 || text[i] !== text[i - 1]) {
      print += text[i];
    }
  }
  
  console.log(print);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");
