/*
const anim = KUTE.fromTo(
    '#w11',
    { path: '#w11' },
    { path: '#w21' },
    { repeat: 999, duration: 2000, yoyo: true, easing: 'easingSinusoidalInOut'}
)

anim.start()
*/

const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}