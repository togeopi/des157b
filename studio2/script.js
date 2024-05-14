(function(){
    'use strict';
    console.log('reading js');

    // const game1 = document.getElementById('game1');
    // const game2 = document.getElementById('game2');
    // const game3 = document.getElementById('game3');
    // const game4 = document.getElementById('game4');
    // const game5 = document.getElementById('game5');
    // const game6 = document.getElementById('game6');
    // const game7 = document.getElementById('game7');
    // const game8 = document.getElementById('game8');
    // const game9 = document.getElementById('game9');

    // const startScreen = document.querySelector('main');

    // game1.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game2.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game3.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game4.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game5.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game6.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game7.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game8.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // game9.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    // const game1 = document.getElementById('game1');

    const button = document.querySelectorAll('button');
    const startScreen = document.querySelector('main');

    // button.addEventListener('click', function(){
    //     startScreen.className = 'hidden';
    // });

    let globalData;

    async function getData(){
        const games = await fetch('data.json');
        const data = await games.json();
        console.log(data);
        const firstGame = 'interdimensional restroom';
        globalData = data;
        document.querySelector('main').innerHTML = selection(data);
        newEvent();

        updateInterface(firstGame, globalData);
    }

    getData();

    function selection(data){
        let html = '';
        const numOfGames = Object.keys(data['all of the games i have helped make']);
        console.log(numOfGames);

        numOfGames.forEach(function(title){
            html += `<button id="${title}">${title}</button>`;
        });

        return html;
    }

    function newEvent(){
        const bttn = document.querySelectorAll('button');

        for (const eachBttn of bttn){
            bttn.addEventListener('click', function(event){
                const title = event.target.id;
                updateUI(title, globalData);

                startScreen.className = 'hidden';

                // add name/year/etc here
                
            });
        }
    }

    function updateInterface(title, jsonData){
        console.log(jsonData);

        const {title, month, day, year} = jsonData['all of the games i have helped make'][titel];

    }
})();
