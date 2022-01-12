const dropBtnOne = document.querySelector('.drop-button-one')
const dropBtnTwo = document.querySelector('.drop-button-two')
const dropBtnThree = document.querySelector('.drop-button-three')
const iconOne = document.querySelector('.icon-one')
const iconTwo = document.querySelector('.icon-two')
const iconThree = document.querySelector('.icon-three')


const dropContentOne = document.querySelector('.drop-content-one')
const dropContentTwo = document.querySelector('.drop-content-two')
const dropContentThree = document.querySelector('.drop-content-three')

dropBtnOne.addEventListener('click',dropOne)
function dropOne(){
dropContentOne.classList.toggle('drop-open')
iconOne.classList.toggle('fa-angle-up')
}


dropBtnTwo.addEventListener('click',dropTwo)
function dropTwo(){
dropContentTwo.classList.toggle('drop-open')
iconTwo.classList.toggle('fa-angle-up')
}

dropBtnThree.addEventListener('click',dropThree)
function dropThree(){
dropContentThree.classList.toggle('drop-open')
iconThree.classList.toggle('fa-angle-up')
}

//Responsive section start

const mediaIconOne = document.querySelector('.media-icon-one')
const mediaIconTwo = document.querySelector('.media-icon-two')
const mediaIconThree = document.querySelector('.media-icon-three')

const navMediaBar = document.querySelector('.icon-media')
const mediaMenu = document.querySelector('.media-menu-container')
navMediaBar.addEventListener('click',mediaFunc)
function mediaFunc(){
    navMediaBar.classList.toggle('fa-times')
    mediaMenu.classList.toggle('media-menu-block')
}


const mediaDropBtnOne = document.querySelector('.media-drop-button-one')
const mediaDropOne = document.querySelector('.media-drop-content-one')
mediaDropBtnOne.addEventListener('click',mediaDropOneFunc)
function mediaDropOneFunc(){
    mediaDropOne.classList.toggle('drop-one-block')
    mediaIconOne.classList.toggle('fa-angle-up')
}



const mediaDropBtnTwo = document.querySelector('.media-drop-button-two')
const mediaDropTwo = document.querySelector('.media-drop-content-two')
mediaDropBtnTwo.addEventListener('click',mediaDropTwoFunc)
function mediaDropTwoFunc(){
    mediaDropTwo.classList.toggle('drop-two-block')
    mediaIconTwo.classList.toggle('fa-angle-up')
}


const mediaDropBtnThree = document.querySelector('.media-drop-button-three')
const mediaDropThree = document.querySelector('.media-drop-content-three')
mediaDropBtnThree.addEventListener('click',mediaDropThreeFunc)
function mediaDropThreeFunc(){
    mediaDropThree.classList.toggle('drop-three-block')
    mediaIconThree.classList.toggle('fa-angle-up')
}

//Responsive section end
