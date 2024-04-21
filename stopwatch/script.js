let  [seconds,minutes,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;


function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }

    }

    let h = hours < 10 ? "0" + hours : hours;
    let s = seconds < 10 ? "0" + seconds  : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;

    displayTime.innerHTML = `${h} : ${m} : ${s}`;
}
function watchStart(){
    Toastify({
        text: "Timer start",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(45deg, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    if(timer!= null){
        clearInterval(timer)
    }
   timer = setInterval(stopwatch,1000);
}


function watchStop(){
    Toastify({
        text: "Timer stopped",
        duration: 6000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    clearInterval(timer)
}


function watchReset(){
    Toastify({
        text: "Stop watch reset",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(45deg, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";

}
