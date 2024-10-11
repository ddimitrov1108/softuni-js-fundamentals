function arenaTier(arr) {
  const list = {};

  for (const el of arr) {
    if (el === "Ave Cesar") break;

    if (el.includes(" -> ")) {
      let [gladiator, skill, power] = el.split(" -> ");
      power = Number(power);

      if (!list[gladiator]) list[gladiator] = { [skill]: power };
      else {
        if (!list[gladiator][skill]) list[gladiator][skill] = power;
        else if (list[gladiator][skill] < power) list[gladiator][skill] = power;
      }
    } else if (el.includes(" vs ")) {
      const [gladiatorA, gladiatorB] = el.split(" vs ");

      if (list[gladiatorA] && list[gladiatorB]) {
        const skillsOfGladA = list[gladiatorA];
        const skillsOfGladB = list[gladiatorB];

        for (const skill in skillsOfGladA) {
          if (skillsOfGladA[skill] > skillsOfGladB[skill])
            delete list[gladiatorB];
          else if (skillsOfGladA[skill] < skillsOfGladB[skill])
            delete list[gladiatorA];
        }
      }
    }
  }

  const tier = Object.entries(list);

  const listSkills = tier.map(([name, skills]) => {
    const sum = Object.values(skills).reduce((a, b) => a + b, 0);
    return [name, Object.entries(skills), sum];
  });

  listSkills.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));
  for (const [name, skills, sum] of listSkills) {
    console.log(`${name}: ${sum} skill`);
    skills
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(([skill, power]) => console.log(`- ${skill} <!> ${power}`));
  }
}

arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
