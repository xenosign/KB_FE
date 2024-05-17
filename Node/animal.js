const animals = ['dog', 'cat'];
exports.animals = animals;
exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};
