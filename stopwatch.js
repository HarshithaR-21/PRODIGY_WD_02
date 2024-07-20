let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('clock');
const lap_display =  document.getElementById('lap-display');

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00:00'
}
function lap(){
    if(timer){
        let li = document.createElement('li');
        li.innerHTML = getTime();
        lap_display.appendChild(li);
    }
}
function resetLap(){
    lap_display.innerHTML = '';
}
let hours;
let minutes;
let seconds;
let milliseconds;

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    hours = Math.floor(elapsedTime/(1000 * 60 * 60));
    minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
    seconds = Math.floor(elapsedTime/1000 % 60);
    milliseconds= Math.floor((elapsedTime%1000)/10);
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function getTime()
{
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}