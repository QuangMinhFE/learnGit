let sum = (a, b) => a + b;
const btn = document.querySelector('.btn')
const span = document.querySelector('.span');
btn.addEventListener('click', () => {
    span.innerHTML = sum(2,3);
});

console.log('hello world')