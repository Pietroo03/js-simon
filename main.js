const buttonEl = document.querySelector('button')

let first
let second
let third
let fourth
let fifth

buttonEl.addEventListener('click', () => {
    first = Math.floor(Math.random() * 10) + 1;
    second = Math.floor(Math.random() * 10) + 1;
    third = Math.floor(Math.random() * 10) + 1;
    fourth = Math.floor(Math.random() * 10) + 1;
    fifth = Math.floor(Math.random() * 10) + 1;

    document.getElementById('first').innerHTML = first
    document.getElementById('second').innerHTML = second
    document.getElementById('third').innerHTML = third
    document.getElementById('fourth').innerHTML = fourth
    document.getElementById('fifth').innerHTML = fifth

}) 






