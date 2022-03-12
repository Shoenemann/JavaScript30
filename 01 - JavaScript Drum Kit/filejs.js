function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;
    
    const key = document.querySelector (`.key[data-key="${e.keyCode}"]`)
    key.classList.add("playing")

    audio.currentTime = 0
    audio.play()
}


function removeAnimation(e) {
    e.target.classList.remove('playing')
}


window.addEventListener('keydown', playSound)

let keysList = document.querySelectorAll(".key")
keys = Array.from(keysList)
keys.forEach(key => key.addEventListener("transitionend", removeAnimation))


