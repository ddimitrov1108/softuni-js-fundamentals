function movies(arr) {
  const moviesArr = [];

  for (const cmd of arr) {
    if (cmd.startsWith("addMovie"))
      moviesArr.push({ name: cmd.split("addMovie")[1].trim() });
    else if (cmd.includes("directedBy")) {
      const [name, director] = cmd.split(" directedBy ");
      const index = moviesArr.findIndex((o) => o.name === name);

      if (index != -1) moviesArr[index].director = director;
    } else if (cmd.includes("onDate")) {
      const [name, date] = cmd.split(" onDate ");
      const index = moviesArr.findIndex((o) => o.name === name);

      if (index != -1) moviesArr[index].date = date;
    }
  }

  for(const obj of moviesArr)
    if(obj?.director && obj?.date)
      console.log(JSON.stringify(obj));
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
