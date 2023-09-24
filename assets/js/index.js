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
    const infoArr = [];
  return {
    addInfo(value) {
        if(typeof value === 'string') infoArr.push(value);
    },

    showInfo() {
      return `name: ${nameAnimal}, color: ${colorAnimal}, weight: ${weightAnimal}`;
    },
    
    deleteInfo(value) {
        const index = infoArr.indexOf(value);
        if(index !== -1) {
            infoArr.splice(index, 1);
        } else {
            console.log('khong co gia tri nay!')
        }
    },

    returnInfo() {
        return infoArr;
    },
    }
};

const pet = Animal('dog','black',100);
pet.addInfo('chihuahua')
pet.addInfo('long tail')
pet.addInfo('short')
pet.addInfo('japan dog')
console.log(pet.returnInfo())

pet.deleteInfo('japan dog')
console.log(pet.returnInfo())
console.log(pet.showInfo())
