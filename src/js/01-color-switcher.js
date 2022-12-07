const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}
 
    refs.startBtn.addEventListener('click', onStarBtntClick);
    refs.stopBtn.addEventListener('click', onStopBtntClick);
    refs.stopBtn.setAttribute('disabled', true)
    let intervalId = null; 
    
function onStarBtntClick() {
    intervalId = setInterval(bodyColorChange, 1000)
    refs.startBtn.setAttribute('disabled', true)
    refs.stopBtn.removeAttribute('disabled')
}

function onStopBtntClick() {
    refs.stopBtn.setAttribute('disabled', true)
    refs.startBtn.removeAttribute('disabled')
    clearInterval(intervalId)


}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bodyColorChange() {
    refs.body.style.backgroundColor = getRandomHexColor()
}
