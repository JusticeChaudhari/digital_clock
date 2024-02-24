//hour
let hourEl = document.getElementById("hours");
//minutes
let minuteEl = document.getElementById("minutes");
//seconds
let secondEL = document.getElementById("seconds");
//ampm
let ampmEl = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h>12){
        ampm="PM";
        h=h-12;
        
    }
    h = h<10? "0"+h : h;
    m = m<10? "0"+m : m;
    s = s<10? "0"+s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEL.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(()=>{
        updateclock();
    },1000)
}
updateclock();