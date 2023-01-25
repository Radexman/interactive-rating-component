const rating = document.querySelectorAll('.rating__box');
const button = document.querySelector('.button');
const feedback = document.querySelector('.section__p--msg');
const cardComponent = document.querySelector('.section');
const feedbackComponent = document.querySelector('.section__feedback');
let score = '';
let msg;

rating.forEach((item) => {
    item.addEventListener('click', () => {
        score = item.textContent;
        item.classList.toggle('rating__box--active');
        msg = `You selected ${score} out of 5`;
        feedback.textContent = msg;
    })
})

button.addEventListener('click', () => {
    if (score.length === 0) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Please select one option';
        cardComponent.appendChild(errorMsg);
    } else {
        feedbackComponent.style.display = 'flex';
        cardComponent.style.display = 'none';
    }
})