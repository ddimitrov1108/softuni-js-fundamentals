function pyramidOfKingDjoser(base, increment) {
  const required = {
    stone: 0,
    marble: 0,
    lapis: 0,
    gold: 0,
    floor: 0,
  };

  while (base > 1 && base - 2 != 0) {
    const totalBlocks = base ** 2 * increment;
    const innerBlocks = (base - 2) ** 2 * increment;
    const outerBlocks = totalBlocks - innerBlocks;

    required.floor += 1;
    base -= 2;

    if (required.floor % 5 === 0) {
      required.lapis += outerBlocks;
      required.stone += innerBlocks;
    } else {
      required.marble += outerBlocks;
      required.stone += innerBlocks;
    }
  }

  required.floor += 1;
  required.gold += Math.ceil(base ** 2 * increment);

  console.log(`Stone required: ${Math.ceil(required.stone)}`);
  console.log(`Marble required: ${Math.ceil(required.marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(required.lapis)}`);
  console.log(`Gold required: ${required.gold}`);
  console.log(
    `Final pyramid height: ${Math.floor(required.floor * increment)}`
  );
}

pyramidOfKingDjoser(11, 1);
pyramidOfKingDjoser(11, 0.75);
pyramidOfKingDjoser(12, 1);
