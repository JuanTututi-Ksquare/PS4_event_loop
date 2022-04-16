const destroyer = (objectives, ...targets) => {
  let survivors = objectives;
  const destroy = (target) => survivors = survivors.filter((objective) => objective !== target);
  for (const target of targets) {
    destroy(target);
  }
  return survivors;
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([15, 23, 3, 45, 1, 26, 26], 26));
