let time = document.querySelector('h1')
let btns = document.querySelectorAll('button')
let secs = 0;
let mins = 0;
let milisecs = 0;
let timeInterval = 0;




btns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        if(event.target.classList.contains('start'))
        {
            timeInterval = setInterval(stopwatch,10)
        }
        else if(event.target.classList.contains('stop'))
        {
            clearInterval(timeInterval)
            console.log("stop");
        }
        else if(event.target.classList.contains('reset'))
        {
            clearInterval(timeInterval)
            secs=0
            mins=0
            milisec=0
            time.innerHTML = `00 : 00 : 00`
            
        }
    })
})

function stopwatch(){
    milisecs++
    if(milisecs==100){
        milisecs = 0;
        secs++;
        if(secs==60){
            mins++
            if(mins==60)
            {
                mins=0;
            }
        }
    }

    let milisec = milisecs < 10 ? `0${milisecs}` : milisecs;
    let sec = secs < 10 ? `0${secs}` : secs;
    let min = mins < 10 ? `0${mins}` : mins;

    time.innerHTML = `${min} : ${sec} : ${milisec}`
}

