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
                    <button class="btn rock">Rock</button>
                    <button class="btn paper">Paper</button>
                    <button class="btn scissors">Scissors</button>
                </div>
                <div class="img-container">
                    <img src="./img/rock.png" alt="player choose" class="image player">
                    <img src="./img/rock.png" alt="computer choose" class="image comp">
                </div>
                <div class="score">
                    <div class="player scr"><h2>Player</h2><span>0</span></div>
                    <div class="computer scr"><h2>Comp</h2><span>0</span></div>
                </div>
            </div>`;
}




// Event Handler
const body = document.querySelector('body');

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


