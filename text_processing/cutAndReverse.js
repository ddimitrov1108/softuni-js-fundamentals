function cutAndReverse(text) {
  console.log(text.slice(0, text.length / 2).split("").reverse().join(""));
  console.log(text.slice(text.length / 2).split("").reverse().join(""));
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
