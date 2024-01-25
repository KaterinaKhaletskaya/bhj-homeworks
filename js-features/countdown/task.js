
addTimer = function(){

    let timer = document.getElementById("timer");
  
    if (timer.textContent > 0){
        timer.textContent = parseInt(timer.textContent) - 1;}
    else {
          alert("Вы победили в конкурсе!");  
          clearInterval(timerInterval);
    }
}
let timerInterval = setInterval(addTimer, 1000);
