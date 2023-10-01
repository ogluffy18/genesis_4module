let animatable = document.querySelector('#animatable');
    
const letters = split(animatable)
setTimeout(() => letters.forEach(span => span.style.opacity = 1), 0)

function split(element) {
element.style.wordBreak = 'break-word'

const letters = element.innerText.split('').map((letter, i) => {
const span = document.createElement('span')
span.innerHTML = letter !== ' ' ? letter : '&nbsp;'
span.style.opacity = 0
span.style.transitionDelay = 0.1 * i + 's'
return span
})

element.innerHTML = ''
element.append(...letters)
return letters
}
// split(element);




let arrowPrev = document.querySelector('.arrow_prev');
let arrowNext= document.querySelector('.arrow_next');

let elems = document.querySelectorAll('.elem');
let index = 0;

    arrowNext.addEventListener('click', () => {
        index++;


        if (index > elems.length -1) {
            index = 0;
        }
        elems.forEach(elem => {
            elem.classList.remove('active');
        })
        elems[index].classList.add('active');
    })


    arrowPrev.addEventListener('click', () => {
        index--;


        if (index < 0) {
            index = elems.length -1;
        }
        elems.forEach(elem => {
            elem.classList.remove('active');
        })
        elems[index].classList.add('active');
    })



