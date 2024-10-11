function fancyBarcode([n, ...arr]) {
  const regex = /^@\#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@\#+$/;
  const digitsRegex = /\d+/g;
  const count = +n;

  for (let i = 0; i < count; i++) {
    const barcode = arr[i];

    if (!regex.test(barcode)) {
      console.log("Invalid barcode");
      continue;
    }

    const digits = barcode.match(digitsRegex);
    const productGroup = digits === null ? "00" : digits.join("");
    console.log(`Product group: ${productGroup}`);
  }
}

fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
