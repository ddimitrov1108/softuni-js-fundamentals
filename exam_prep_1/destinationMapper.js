function destinationMapper(str) {
  const regex = /=([A-Z][a-zA-Z]{2,})=|\/([A-Z][a-zA-Z]{2,})\//g;
  const destinations = [];

  let points = 0;
  let match;

  while ((match = regex.exec(str)) !== null) {
    const destination = match[1] || match[2];
    destinations.push(destination);
    points += destination.length;
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
