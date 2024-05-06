const caret = document.querySelectorAll('.fa-caret-right');
const startScreen = document.querySelector('main');
const game1 = document.getElementById('game1');

caret.addEventListener('click', function(){
    startScreen.className = 'hidden';
});