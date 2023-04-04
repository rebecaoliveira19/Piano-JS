// get all keys 
const keys = document.querySelectorAll(".key")

function playNote(event) {
    
    let audioKeyCode = getKeyCode(event);

    //typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // if key exists
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
    return;
    }
    
    playAudio(audioKeyCode)
}


function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
    keyCode = event.keyCode
    } else {
    keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}



// click with mouse
keys.forEach( function(key){
key.addEventListener("click", playNote)
})
// keyboard type 

window.addEventListener("Keydown", playNote)