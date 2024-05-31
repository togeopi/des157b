(function(){
    'use strict';
    console.log('reading js');

    const startScreen = document.getElementById('startScreen');
    const start = document.getElementById('start');
    const img = document.getElementById('img');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');
    const text5 = document.getElementById('text5');
    const text6 = document.getElementById('text6');
    const text7 = document.getElementById('text7');
    const text8 = document.getElementById('text8');
    let index = 0;

    alert('hello friend! my project is still very simple so there is not a lot of functionality... but please read through the text, please click the buttons to proceed through the text, and let me know how i can improve my ui/ux!');

    start.addEventListener('click', function(event){
        event.preventDefault();
        startScreen.className = 'hidden';
        img.className = 'showing';
        text1.className = 'showing';
    });

    displayText();

    function displayText(){
        const bttn = document.getElementsByTagName('button');

        for (const eachBttn of bttn) {
            eachBttn.addEventListener('click', function(){
                index ++;

                if (index == 1){
                    text1.className = 'hidden';
                    text2.className = 'showing';
                }

                else if (index == 2){
                    text2.className = 'hidden';
                    text3.className = 'showing';
                }

                else if (index == 3){
                    text3.className = 'hidden';
                    text4.className = 'showing';
                }

                else if (index == 4){
                    text4.className = 'hidden';
                    text5.className = 'showing';
                }

                else if (index == 5){
                    text5.className = 'hidden';
                    text6.className = 'showing';
                }

                else if (index == 6){
                    text6.className = 'hidden';
                    text7.className = 'showing';
                }

                else if (index == 7){
                    text7.className = 'hidden';
                    text8.className = 'showing';
                }

                else {
                    index = 0;
                    text8.className = 'hidden';
                    startScreen.className = 'showing';
                    img.className = 'hidden';
                }
            });
        }
    }
    
})();