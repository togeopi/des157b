(function(){
    'use strict';
    console.log('reading js');

    const game = document.getElementById('game');
    const image = document.querySelector('img');
    const gameLink = document.getElementById('gameLink');

    let globalData;

    async function getData(){
        const games = await fetch('data.json');
        const data = await games.json();
        console.log(data);
        globalData = data;

        document.querySelector('nav').innerHTML = buttons(data);

        newEvent();
        const firstGame = 'interdimensional restroom';

        updateInterface(firstGame, globalData);
    }

    function buttons(data){
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
            eachBttn.addEventListener('click', function(event){
                updateInterface(title, data);

                const game = event.target.id;

                game.className = 'showing';
                image.className = 'showing';
                gameLink.className = 'showing';
            });
        }
    }

    function updateInterface(title, data){
        console.log(data);

        const { name, date, link} = data["all of the games i have helped make"][title];
        
        game.innerHTML = `<p>${name}</p>
                        <p>released ${date}</p>
                        <p>check it out here <a href = "${link}></a>"</p>`;

        gameLink.href = link
    }

    getData();
})();
