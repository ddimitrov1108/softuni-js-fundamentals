function charsInRange(ch1, ch2) {
  ch1 = ch1.charCodeAt(0);
  ch2 = ch2.charCodeAt(0);

  const start = ch1 < ch2 ? ch1 : ch2;
  const end = ch1 < ch2 ? ch2 : ch1;
  let print = "";

  for (let i = start + 1; i < end; i++) print += `${String.fromCharCode(i)} `;

  console.log(print);
}

charsInRange("a", "d");
charsInRange("#", ":");
charsInRange("C", "#");
