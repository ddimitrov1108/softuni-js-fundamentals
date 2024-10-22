function legendaryArtifact([energy, ...terrains]) {
  let energyLeft = +energy;
  let piecesCollected = 0;
  let counter = 0;

  for (let terrain of terrains) {
    if (
      terrain === "Journey ends here!" ||
      energyLeft <= 0 ||
      piecesCollected === 3
    )
      break;

    if (terrain === "mountain") {
      energyLeft -= 10;
      counter++;

      if (counter === 3) {
        piecesCollected += 1;
        counter = 0;
      }
    } else if (terrain === "desert") energyLeft -= 15;
    else energyLeft += 7;
  }

  if (piecesCollected === 3)
    console.log(
      `The character reached the legendary artifact with ${energyLeft.toFixed(
        2
      )} energy left. `
    );
  else if (energyLeft <= 0)
    console.log("The character is too exhausted to carry on with the journey.");
  else
    console.log(
      `The character could not find all the pieces and needs ${
        3 - piecesCollected
      } more to complete the legendary artifact.`
    );
}

legendaryArtifact([
  "130.0",
  "mountain",
  "desert",
  "mountain",
  "forest",
  "mountain",
  "desert",
  "desert",
  "mountain",
  "mountain",
  "desert",
  "mountain",
  "forest",
  "mountain",
  "mountain",
  "forest",
  "mountain",
  "Journey ends here!",
]);

legendaryArtifact([
  "40.0",
  "mountain",
  "desert",
  "mountain",
  "forest",
  "mountain",
  "mountain",
  "Journey ends here!",
]);

legendaryArtifact([
  "100.0",
  "mountain",
  "forest",
  "mountain",
  "forest",
  "desert",
  "mountain",
  "desert",
  "Journey ends here!",
]);
