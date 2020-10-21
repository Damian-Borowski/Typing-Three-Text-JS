// const menuElements = document.querySelectorAll('a');
// const containerElement = document.querySelector('.container');

// menuElements.forEach((item) => {
//     item.addEventListener('click', () => {
//         containerElement.className = "classname";
//     })
// })


const animatedText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = [`Hi! I'm Damian! Welcome on my website!`, `I'm a Junior Front End Developer`, `Scroll Down and Read More About Me!`];
let activeLetter = 0;
let activeText = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
        animatedText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return;
        return setTimeout(() => {
            activeLetter = 0;
            animatedText.textContent = '';
            addLetter();
        }, 2000);
    }
    setTimeout(addLetter, 100);
}

addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);


