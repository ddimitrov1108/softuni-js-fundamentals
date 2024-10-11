function furniture(arr) {
  const regex = new RegExp(
    ">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)"
  );
  let bought = [];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Purchase") break;

    const match = arr[i].match(regex);

    if (match) {
      bought.push(match[1]);
      total += parseFloat(match[2]) * parseInt(match[3]);
    }
  }

  console.log("Bought furniture:");

  if (bought.length) console.log(bought.join("\n"));

  console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
  ">>TV<<30.21314!5",
]);
