function rounding(number, round) {
  console.log(parseFloat(number.toFixed(round > 15 ? 15 : round)));
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
