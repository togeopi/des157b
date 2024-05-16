(function(){
    'use strict';
    console.log('reading js');


    let globalData;

    async function getData(){
        const games = await fetch('data.json');
        const data = await games.json();
        console.log(data);
        globalData = data;
    
        document.querySelector('nav').innerHTML = gameList(data);

        const firstGame = 'interdimensional restroom';
        document.querySelector('#gameDisplayed').innerHTML = updateInterface(firstGame, globalData);

        displayGame();
    };

    function gameList(data){
        let html = '';
        const listOfGames = Object.keys(data[['all of the games i have helped make']]);
        console.log(listOfGames);
        listOfGames.forEach( function(title){
            html += `<button id="${title}">${title}</button>`;
        });

        return html;
    }


    function displayGame(){
        const bttn = document.querySelectorAll('button');

        for (const eachBttn of bttn) {
            eachBttn.addEventListener('click', function(event){
                const game = event.target.id;

                updateInterface(game, globalData);
                let gameDisplayed = document.querySelector('#gameDisplayed');
                console.log(gameDisplayed);

                gameDisplayed.className = 'showing';
            
            });
        }
    }

    // updates interface with each button clicked
    function updateInterface(game, jsonData){
        const gameData = jsonData["all of the games i have helped make"][game];
        console.log(gameData);
        const gameDisplayed = document.querySelector('#gameDisplayed');

        let html = '';
        html += `<p>${gameData.name}</p>
        <p>released ${gameData.date}</p>
        <p>${gameData.link}</p>`;

        gameDisplayed.innerHTML = html;

        const gameCover = document.getElementById('gameCover');
        

        if (gameData.name == 'remember') {
            gameCover.src = 'images/game2.png';
            gameCover.className = 'showing';
        }

        else if ( gameData['interdimensional restroom']) {
            gameCover.src = 'images/game1.png'; 
            gameCover.className = 'showing';
        }

        else if (gameData.name == 'multi') {
            gameCover.src = 'images/game3.png';
            gameCover.className = 'showing';
        }

        else if (gameData.name == 'the red room') {
            gameCover.src = 'images/game4.png';
            gameCover.className = 'showing';
        }

        else if (gameData.name == "we're home."){
            gameCover.src = 'images/game5.png';
            gameCover.className = 'showing';
        }

        else if (gameData.name == 'snowba') {
            gameCover.src = 'images/game6.png';
            gameCover.className = 'showing';
        }

        else if (gameData.name == 'nous') {
            gameCover.src = 'images/game7.png';
            gameCover.className = 'showing';
        }

        else if (gameData.name == 'radiant ascension') {
            gameCover.src = 'images/game8.png';
            gameCover.className = 'showing';
        }

        else if (gameData.name == 'cotton candy dreams') {
            gameCover.src = 'images/game9.png';
            gameCover.className = 'showing';
        }

        else {
            gameCover.className = 'hidden';
        }

        return html;
    }


    getData();
})();
