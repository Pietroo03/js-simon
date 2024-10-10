const buttonEl = document.querySelector('button')
const rowEl = document.getElementsByClassName('.row')
const unoEl = document.getElementById('uno')
const dueEl = document.getElementById('due')
const treEl = document.getElementById('tre')
const quattroEl = document.getElementById('quattro')
const cinqueEl = document.getElementById('cinque')


function random_generator() {
    let number = []
    for (let i = 0; i <= 5; i++) {
        number[i] = Math.floor(Math.random() * 100) + 1
    }
    return number
}

buttonEl.addEventListener('click', function() {
    let randomNumber = random_generator()

    unoEl.innerHTML = randomNumber[0]
    dueEl.innerHTML = randomNumber[1]
    treEl.innerHTML = randomNumber[2]
    quattroEl.innerHTML = randomNumber[3]
    cinqueEl.innerHTML = randomNumber[4]

    setTimeout (myFunction, 3000)
        function myFunction() {
            

        }
})