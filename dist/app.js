const rating = document.querySelectorAll('.rating__box');
const button = document.querySelector('.button');
const section = document.querySelector('.section');
let msg;

rating.forEach((item) => {
    item.addEventListener('click', () => {
        let score = item.textContent;
        let feedback = document.createElement('p');
        item.classList.toggle('rating__box--active');
        msg = `You selected ${score} out of 5`;
        feedback.textContent = msg;
        section.appendChild(feedback);
    })
})