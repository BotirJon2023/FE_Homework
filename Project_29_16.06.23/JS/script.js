function start_game() {
object.classList.toggle('start');

    console.log("start game work")
}

function finish_game() {
object.classList.remove('start');
    alert(`You lose. Score ${score}`);
    console.log('finish game works');
}

function hit() {
    console.log('hit works');
    score++;
    document.title = `Score ${score}`;

    object.classList.remove('start');
    void object.offsetWith; // Магия
    object.classList.add('start');

    
    let random_offset = Math.random() * 340;
    object.style.left = `${random_offset}px`;

    change_object_background()

    hit_sound.currentTime = 0;
    hit_sound.play();


}

function miss(event) {
    if(event.target.id == "area") {
        console.log("miss works")
        score--;
if (score <= 0) {
    finish_game();
   
}

        document.title = `Score ${score}`;

        miss_sound.currentTime = 0;
        miss_sound.play();
    

    }   
}

function change_object_background() {
    const colors = ['purple', 'gold','blue','red','black', 'grey','yellow']
    const random_index = Math.floor(Math.random() * colors.length);
    object.style.background = colors [random_index];
}

let score = 0;
let object = document.querySelector('#object');

const hit_sound = new Audio('sounds/hit.wav');
const miss_sound = new Audio('sounds/miss.wav');
