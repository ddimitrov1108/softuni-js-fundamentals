function minerTask(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i += 2) {
    if (result[arr[i]]) result[arr[i]] += Number(arr[i + 1]);
    else result[arr[i]] = Number(arr[i + 1]);
  }

  for (const [key, value] of Object.entries(result))
    console.log(`${key} -> ${value}`);
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
