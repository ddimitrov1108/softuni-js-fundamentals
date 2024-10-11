function maxSequence(arr) {
  const sequences = [];
  let currSeq = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) currSeq.push(arr[i]);
    else {
      sequences.push(currSeq);
      currSeq = [arr[i + 1]];
    }
  }

  sequences.push(currSeq);

  const longestSeq = sequences.reduce((max, current) => {
    return current.length > max.length ? current : max;
  }, []);

  console.log(longestSeq.join(" "));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
