const btn = document.createElement("button");
btn.textContent="Click me";
btn.className='btn1';

btn.addEventListener('click', clickBtn);
function clickBtn(){
    document.querySelector('h2').remove();
}


const division = document.querySelector("div");
division.appendChild(btn);

// to remove something from the DOM we can use
// document.querySelector('h2').remove();


// provide event on it
const p= document.querySelector('p');
p.addEventListener('click', clickPara);
function clickPara(){
    alert('You clicked the paragraph');
}