// opening container
function makeElOp() {
    return `<div class="opening-container">
                    <h1>Rock Paper & Scissors</h1>
                    <img src="./img/openingImg.png" alt="rock paper scissors image">
                    <button class="playGameBtn">PLAY GAME</button>
                    <audio src=""></audio>
                </div>`;
};




// main container
function makeElMain() {
    return `<div class="main-container">
                <h1>Choose an Option</h1>
                <div class="btn-container">
                    <button class="rock">Rock</button>
                    <button class="paper">Paper</button>
                    <button class="scissors">Scissors</button>
                </div>
                <div class="img-container">
                    <img src="./img/player-rock.png" alt="player choose" class="image player">
                    <img src="./img/comp-rock.png" alt="computer choose" class="image comp">
                </div>
                <div class="score">
                    <div class="player scr"><h2>Player</h2><span>0</span></div>
                    <div class="computer scr"><h2>Comp</h2><span>0</span></div>
                </div>
            </div>`;
}

// fungsi pilihan comp
function compChoice() {
    const ranNum = Math.round(Math.random() * (9 - 1) + 1);

    if( ranNum >= 1 && ranNum <= 3){
        return 'rock';
    }else if( ranNum >= 4 && ranNum <= 6 ){
        return 'paper';
    }else if( ranNum >= 7 && ranNum <= 9 ){
        return 'scissors';
    }
}


// rules
function rules(player, comp){
    if( player === comp ){
        return `It's DRAW!!`;
    }else{
        if( player === 'rock' ){
            if( comp === 'paper' ){
                return `Computer WIN!!`;
            }else if( comp === 'scissors' ){
                return `Player WIN!!`;
            }
        }else if( player === 'paper' ){
            if( comp === 'rock' ){
                return `Player WIN!!`; 
            }else if( comp === 'scissors' ){
                return `Computer WIN!!`;
            }
        }else if( player === 'scissors' ){
            if( comp === 'rock' ){
                return `Computer WIN!!`;
            }else if( comp === 'paper' ){
                return `Player WIN!!`; 
            }
        }
    }
}


// Event Handler

const body = document.querySelector('body');
let pScore = 0;
let compScore = 0;

// meload game pertama kali
window.addEventListener('load', function() {
    body.innerHTML = makeElOp();
});

// memulai game
window.addEventListener('click', (e) => {
    if( e.target.className == 'playGameBtn' ){

        // menyembunyikan opening
        e.target.parentElement.classList.add('hide');

        // memunculkan main
        setTimeout(() => {
            body.innerHTML = makeElMain();
            body.firstChild.classList.add('show');
        }, 700)
        
    }
});

// pilian player
window.addEventListener('click', (e) => {
    if( e.target.className === 'rock' || e.target.className === 'paper' || e.target.className === 'scissors' ){
        const player = e.target.className;
        const comp = compChoice();
        const resultText = document.querySelector('h1');
        const images = Array.from(document.querySelectorAll('.image'));

        // mereset icon paper menjadi rock
        document.querySelector('.image.player').src = `./img/player-rock.png`;
        document.querySelector('.image.comp').src = `./img/comp-rock.png`;

        // memberi image animasi ancang - ancang
        images.forEach(el => el.classList.add('show'));

        // menghentikan animasi & menampilkan hasil
        setTimeout(() => {
            images.forEach(el => el.classList.remove('show'));

            document.querySelector('.image.player').src = `./img/player-${player}.png`;
            document.querySelector('.image.comp').src = `./img/comp-${comp}.png`;
            resultText.textContent = rules(player, comp);
    
            if( resultText.textContent.includes('Player') ){
                pScore += 1;
            }else if( resultText.textContent.includes('Computer') ){
                compScore += 1;
            }
    
            document.querySelector('.player.scr span').textContent = pScore;
            document.querySelector('.computer.scr span').textContent = compScore;

        }, 2500)

    }
})


