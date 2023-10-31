'use strict';

const input = document.querySelector('input');
const notRequiredNoticeEl = document.getElementById('notRequiredNotice');
const subscribeBtn = document.getElementById('subscribeBtn');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
    if (isEmailValid(input.value) || input.value === '') {
        input.style.backgroundColor = 'transparent';
        notRequiredNoticeEl.style.color = 'transparent';
        input.style.color = 'hsl(231, 7%, 60%)';
        input.style.borderColor = 'hsl(231, 7%, 60%)';
    } else {
        input.style.color = 'hsl(4, 100%, 67%';
        notRequiredNoticeEl.style.color = 'hsl(4, 100%, 67%';
        input.style.borderColor = 'red';
        input.style.backgroundColor = 'hsl(4, 100%, 95%)';
    }
};

input.addEventListener('input', onInput);

function isEmailValid(value) {
return EMAIL_REGEXP.test(value);
};

subscribeBtn.addEventListener('click', () => {
    if (isEmailValid(input.value) === true) {

        const mainContainerEl = document.querySelector('.main-container');
        mainContainerEl.classList.add('hidden');

        const successDivEl = document.createElement('div');
        successDivEl.classList.add('success-div');

        const bodyEl = document.getElementById('bodyEl');
        bodyEl.appendChild(successDivEl);

        const successImgEl = document.createElement('div');
        successImgEl.classList.add('success-img');
        successDivEl.appendChild(successImgEl);

        const successH1El = document.createElement('h1');
        successH1El.classList.add('success-h1');
        successH1El.innerText = 'Thanks for subscribing!'
        successDivEl.appendChild(successH1El);

        const successParagraphEl = document.createElement('p');
        successParagraphEl.classList.add('success-paragraph');
        successParagraphEl.innerHTML = 'A confirmation email has been sent to'+ ' ' + 
            ("<b>" + input.value + "</b>") + 
            '. Please open it and click the button inside to confirm your subscription.'
        successDivEl.appendChild(successParagraphEl);

        const successBtnEl = document.createElement('button');
        successBtnEl.classList.add('success-button');
        successBtnEl.innerText = 'Dismiss message';
        successDivEl.appendChild(successBtnEl);

        successBtnEl.addEventListener('click', () => {
            location.reload();
        });
    };
});