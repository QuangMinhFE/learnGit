let sum = (a, b) => a + b;
const btn = document.querySelector(".btn");
const span = document.querySelector(".span");
btn.addEventListener("click", () => {
  span.innerHTML = sum(2, 3);
});

const Animal = function (name, color, weight) {
  let nameAnimal = name;
  let colorAnimal = color;
  let weightAnimal = weight;

  return {
    showInfo() {
      return `name: ${nameAnimal}, color: ${colorAnimal}, weight: ${weightAnimal}`;
    },
  };
};

console.log(Animal("dog", "black", 100).showInfo());
