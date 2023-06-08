function killer(suspectInfo, dead) {
  const killerName = Object.keys(suspectInfo).find((suspect) => {
    return dead.every((victim) => suspectInfo[suspect].includes(victim));
  });

  return killerName;
}

const suspectInfo = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const dead = ["Lucas", "Bill"];

const killerName = killer(suspectInfo, dead);
console.log(killerName);
