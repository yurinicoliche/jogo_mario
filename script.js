const mario = document.querySelector('.Mario')
const pipe = document.querySelector('.pipe')
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {
  
    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.left = '50px'

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump )