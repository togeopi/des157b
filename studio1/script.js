(function(){
    'use strict';
    console.log('reading js');

    const milo = document.getElementById('milo');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');
    const line5 = document.getElementById('line5');
    const line6 = document.getElementById('line6');
    const intervalID = setInterval(checkTime, 1000);
    const loading = document.querySelector('.fa-heart');


    function checkTime(){
        if(1 < milo.currentTime && milo.currentTime < 3){
            line1.className = 'showing'; 
            line2.className = 'hidden';
            line3.className = 'hidden';
            line4.className = 'hidden';
            line5.className = 'hidden';
            line6.className = 'hidden';
        } else {
            line1.className = 'hidden';
        }

        if(3 <  milo.currentTime && milo.currentTime < 5) {
            line1.className = 'hidden'; 
            line2.className = 'showing';
            line3.className = 'hidden';
            line4.className = 'hidden';
            line5.className = 'hidden';
            line6.className = 'hidden';
        } else {
            line2.className = 'hidden';
        }

        if(5 <  milo.currentTime && milo.currentTime < 7) {
            line1.className = 'hidden'; 
            line2.className = 'hidden';
            line3.className = 'showing';
            line4.className = 'hidden';
            line5.className = 'hidden';
            line6.className = 'hidden';
        } else {
            line3.className = 'hidden';
        }

        if(7 <  milo.currentTime && milo.currentTime < 9) {
            line1.className = 'hidden'; 
            line2.className = 'hidden';
            line3.className = 'hidden';
            line4.className = 'showing';
            line5.className = 'hidden';
            line6.className = 'hidden';
        } else {
            line4.className = 'hidden';
        }

        if(9 <  milo.currentTime && milo.currentTime < 12) {
            line1.className = 'hidden'; 
            line2.className = 'hidden';
            line3.className = 'hidden';
            line4.className = 'hidden';
            line5.className = 'showing';
            line6.className = 'hidden';
        } else {
            line5.className = 'hidden';
        }

        if(12 <  milo.currentTime && milo.currentTime < 14) {
            line1.className = 'hidden'; 
            line2.className = 'hidden';
            line3.className = 'hidden';
            line4.className = 'hidden';
            line5.className = 'hidden';
            line6.className = 'showing';
        } else {
            line6.className = 'hidden';
        }
    }

    milo.addEventListener('playing', function(){
        loading.style.display = 'none';
    });
})();