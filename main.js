const createButtonEl = document.getElementById('create-button')
const rowEl = document.getElementsByClassName('.row')
const unoEl = document.getElementById('uno')
const dueEl = document.getElementById('due')
const treEl = document.getElementById('tre')
const quattroEl = document.getElementById('quattro')
const cinqueEl = document.getElementById('cinque')
const inputOneEl = document.getElementById('inputOne')
const inputTwoEl = document.getElementById('inputTwo')
const inputThreeEl = document.getElementById('inputThree')
const inputFourEl = document.getElementById('inputFour')
const inputFiveEl = document.getElementById('inputFive')
const sendButtonEl = document.getElementById('send-button')
const resultEl = document.getElementById('result')


let number = []
function random_generator() {
    for (let i = 0; i <= 5; i++) {
        number[i] = Math.floor(Math.random() * 100) + 1
    }
    return number
}

createButtonEl.addEventListener('click', function() {
    
    let randomNumber = random_generator()
    unoEl.innerHTML = randomNumber[0]
    dueEl.innerHTML = randomNumber[1]
    treEl.innerHTML = randomNumber[2]
    quattroEl.innerHTML = randomNumber[3]
    cinqueEl.innerHTML = randomNumber[4]

    setTimeout (myFunction, 3000)
        function myFunction() {
            unoEl.classList.add('d-none')
            dueEl.classList.add('d-none')
            treEl.classList.add('d-none')
            quattroEl.classList.add('d-none')
            cinqueEl.classList.add('d-none')
            createButtonEl.classList.add('d-none')
            inputOneEl.classList.remove('d-none')
            inputTwoEl.classList.remove('d-none')
            inputThreeEl.classList.remove('d-none')
            inputFourEl.classList.remove('d-none')
            inputFiveEl.classList.remove('d-none')
            sendButtonEl.classList.remove('d-none')
        }
})
const numberGiven = []

sendButtonEl.addEventListener('click', () => {

    const valueOne = Number(inputOneEl.value)
    const valueTwo = Number(inputTwoEl.value)
    const valueThree = Number(inputThreeEl.value)
    const valueFour = Number(inputFourEl.value)
    const valueFive = Number(inputFiveEl.value)
    
    numberGiven.push(valueOne)
    numberGiven.push(valueTwo)
    numberGiven.push(valueThree)
    numberGiven.push(valueFour)
    numberGiven.push(valueFive)

    /* console.log(valueOne, valueTwo, valueThree, valueFour, valueFive); */

    let counter = 0
    
    for (let i = 0; i <= number.length; i++) {
        const element = numberGiven[i];
        if (number.includes(element)) {
            counter++ 
        }
        
    }
    console.log(counter);
})
