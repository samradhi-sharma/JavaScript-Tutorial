const buttonElement = document.querySelector('.button');
const textElement = document.querySelector('#text');
buttonElement.addEventListener('click', ()=>{
    textElement.textContent='button is pressed';
    setTimeout(()=>{
        textElement.textContent = '';

    }, 2000);
});