function worldTour([route, ...cmds]) {
  for (const cmd of cmds) {
    if (cmd === "Travel") break;

    let [op, ...args] = cmd.split(":");

    switch (op) {
      case "Add Stop":
        const index = +args[0];
        const stop = args[1];

        if (index >= 0 && index < route.length)
          route = route.substr(0, index) + stop + route.substr(index);
        break;
      case "Remove Stop":
        args = args.map(Number);

        if (args[0] >= 0 && args[1] < route.length && args[0] <= args[1])
          route = route.substring(0, args[0]) + route.substring(args[1] + 1);
        break;
      case "Switch":
        route = route.replace(new RegExp(args[0], "g"), args[1]);
    }

    console.log(route);
  }

  console.log(`Ready for world tour! Planned stops: ${route}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
