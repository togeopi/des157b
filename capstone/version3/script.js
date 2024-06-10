(function(){
    'use strict';
    console.log('reading js');

    const startScreen = document.getElementById('startScreen');
    const start = document.getElementById('start');
    const text1 = document.getElementById('text1');

    let index = 0;
    let typed;

    start.addEventListener('click', function(event){
        event.preventDefault();
        startScreen.className = 'hidden';
        image.className = 'showing';
        text1.className = 'showing';

            typed = new Typed('#element', {
            strings: ['when i was a child', 'i was always thinking about the future', 'i could not imagine being 20 years old', 'i could not imagine what my life would be like at that age'],
            typeSpeed: 50,
            showCursor: false,
          });
    });

    displayText();

    function displayText() {
        document.addEventListener('keydown', function(event){
            index ++;
            if (event.code === 'Space' && index === 1){
                typed = new Typed('#element', {
                    strings: ['since i was a kid', 'every choice i made was with my future in mind', 'my future always resembled what my life would be like in my 20s', 'i am happy to say that im turning 22 this year'],
                    typeSpeed: 50,
                    showCursor: false,
                  });
            }
    
            else if (event.code === 'Space' && index === 2){
                typed = new Typed('#element', {
                    strings: ['since i have been in college', 'i continue to dream about my future', 'i dream about my future so much that i forget to live in the moment', 'i forget to live the life that younger me worked so hard for'],
                    typeSpeed: 50,
                    showCursor: false,
                  });
            }
    
            else if (event.code === 'Space' && index === 3){
                typed = new Typed('#element', {
                    strings: ['not a lot of people talk about how lonely it gets working towards a better future', 'especially when you’re the first in your family to move away and go to college', "not a lot of people talk about the struggle of finding yourself when you have felt lost for your entire life"],
                    typeSpeed: 50,
                    showCursor: false,
                  });
            }
    
            else if (event.code === 'Space' && index === 4){
                typed = new Typed('#element', {
                    strings: ['being first generation is so beautiful but so hard at the same time', 'it is so healing to know that you are breaking the cycle', 'but sometimes it leaves you so broken'],
                    typeSpeed: 50,
                    showCursor: false,
                  });
            }
    
            else if (event.code === 'Space' && index === 5){
                typed = new Typed('#element', {
                    strings: ['i hope in the future, it gets easier for generations after me', 'i hope that they have all the resources they need in order to blossom', 'it will always be hard, but i hope that years from now there is more support'],
                    typeSpeed: 50,
                    showCursor: false,
                  });
            }
    
            else if (event.code === 'Space' && index === 6){
                typed = new Typed('#element', {
                    strings: ['change is so scary', "but it's a beautiful thing", 'it’s beautiful to know that we are capable of so much', 'we are all full of change'],
                    typeSpeed: 50,
                    showCursor: false,
                  });
            }
    
            else if (event.code === 'Space' && index === 7){
                typed = new Typed('#element', {
                    strings: ['with time, we will learn to understand', 'that all of this was worth it', 'and we will soon be able to say', 'we made it'],
                    typeSpeed: 50,
                    showCursor: false,
                  });
            }
    
            else {
                index = 0;
                text1.className = 'hidden';
                startScreen.className = 'showing';
                image.className = 'hidden';
            }
        });
    }    

    
    const images = ["images/circle1.png", "images/circle2.png", "images/circle3.png", "images/circle4.png", "images/circle5.png"];
    let imageIndex = 0;
    const image = document.getElementById('imageSource');
    let intervalID;

    image.addEventListener('mouseover', () => {
        changeImage();
    });

    image.addEventListener('mouseout', () => {
        image.src = images[0];
    });

    image.addEventListener('mouseover', () => {
        intervalID = setInterval(changeImage, 200);
    });

    image.addEventListener('mouseout', () => {
        clearInterval(intervalID);
        image.src = 'images/circle1.png';
        imageIndex = 0;
    });
        
    function changeImage(){
        imageIndex ++;

        if(imageIndex >= images.length) {
            imageIndex = 0;
        }

        image.src = images[imageIndex];
    }
})();