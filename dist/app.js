const rating = document.querySelectorAll('.rating__box');
const button = document.querySelector('.button');
let msg;

rating.forEach((item) => {
    item.addEventListener('click', () => {
        let score = item.textContent;
        item.classList.toggle('rating__box--active');
        msg = `You selected ${score} out of 5`;
        console.log(msg);
    })
})