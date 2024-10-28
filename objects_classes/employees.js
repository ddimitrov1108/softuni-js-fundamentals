function employees(arr) {
  for (const data of arr) {
    const { name, personalNumber } = {
      name: data,
      personalNumber: data.length,
    };

    console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
  }
}

employees(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
