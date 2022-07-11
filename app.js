// Select the buttons from html
const allBtns = document.querySelectorAll('.nav-btn')

// Select all the screens from html
const allScreens = document.querySelectorAll('.display div')
const display = document.querySelector('.display')
let currentIndex = 0

function next() {
    currentIndex += 1
    if (currentIndex === allScreens.length) currentIndex = 0
}

function slide (index) {
    allScreens.forEach(screen => {
        screen.style.setProperty('transform', `translateX(-${index * 100}%)`)
    })
}

function toggleActive (index) {
    // Remove .active class from other buttons
    allBtns.forEach(btn => btn.classList.remove('active'));
    // Add the .active class to the button
    allBtns[index].classList.add('active')
}


// Loop through all buttons using forEach method
allBtns.forEach(function (btn, index) {
    btn.onclick = function () {
        currentIndex = index
        toggleActive(index)
        slide(index)
    }
})

let timeId = setInterval(() => {
    next()
    // allBtns[currentIndex].click()
    slide(currentIndex)
    toggleActive(currentIndex)
}, 5000)