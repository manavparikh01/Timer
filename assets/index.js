//var today = new Date();
let time = document.querySelector('.time')
let date = document.querySelector('.date')
//var timenow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let ti = document.querySelector('.ti')
let setti = document.querySelector('.setti')
let timeagain = document.querySelector('.timeagain')
let clock = document.querySelector('.cl')
let timer = document.querySelector('.tm')
let stopwatch = document.querySelector('.st')
let shiftshift = document.querySelector('.siftsift')
let stamp = 0

ti.addEventListener('click', () => {
    setti.classList.add('unselectedformat')
    setti.classList.remove('selectedtimeformat')
    ti.classList.remove('unselectedformat')
    ti.classList.add('selectedtimeformat')
    shiftshift.classList.remove('notvisible')
    stamp = 24
})

setti.addEventListener('click', () => {
    setti.classList.remove('unselectedformat')
    setti.classList.add('selectedtimeformat')
    ti.classList.remove('selectedtimeformat')
    ti.classList.add('unselectedformat')
    shiftshift.classList.add('notvisible')
    stamp = 12
})

clock.addEventListener('click', () => {
    timer.classList.add('unselectedformat')
    timer.classList.remove('selectedtimeformat')
    stopwatch.classList.add('unselectedformat')
    stopwatch.classList.remove('selectedtimeformat')
    clock.classList.remove('unselectedformat')
    clock.classList.add('selectedtimeformat')
    stamp = 10
})

timer.addEventListener('click', () => {
    timer.classList.remove('unselectedformat')
    timer.classList.add('selectedtimeformat')
    stopwatch.classList.add('unselectedformat')
    stopwatch.classList.remove('selectedtimeformat')
    clock.classList.add('unselectedformat')
    clock.classList.remove('selectedtimeformat')
    
})

stopwatch.addEventListener('click', () => {
    timer.classList.add('unselectedformat')
    timer.classList.remove('selectedtimeformat')
    stopwatch.classList.remove('unselectedformat')
    stopwatch.classList.add('selectedtimeformat')
    clock.classList.add('unselectedformat')
    clock.classList.remove('selectedtimeformat')
    stamp = 24
})



const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

// const newTime = "Jan 5, 2022 00:2:25";
// const setTime = "Jan 5, 2022 00:00:00";

// const neew = new Date()
// let neewhour = neew.getHours() + 0
// let neewminutes = neew.getMinutes() + 2
// let neewseconds = neew.getSeconds() + 25
// let distancesecondsagain = 60

// function countdown() {
    
//     const set = new Date()
//     let sethour = set.getHours()
//     let setminutes = set.getMinutes()
//     let setseconds = set.getSeconds()
//     var distancehour = neewhour - sethour;
//     var distanceminutes = neewminutes - setminutes;
//     var distanceseconds = neewseconds - setseconds;
    

//     if (distanceseconds < 0) {
//         distancesecondsagain = 120 - (60 - distanceseconds) 
//     }
//     else {
//         distancesecondsagain = distanceseconds
//     }

//     hours.innerHTML = distancehour
//     mins.innerHTML = distanceminutes
//     seconds.innerHTML = distancesecondsagain

//   // If the count down is finished, write some text
// //   if (distance < 0) {
// //     //clearInterval(x);
// //     //document.getElementById("demo").innerHTML = "EXPIRED";
// //     console.log("hi")
// //   }
    
// }

let hourtime = 0
let mintime = 1
let secondtime = 15




let countdown = () => {
    // while (hourtime != 0 & mintime != 0 & secondtime != 0) {
    //     let mt = mintime
    //     while (mt > -1) {
    //         let st = secondtime
    //         while (st > -1) {
    //             hours.innerHTML = hourtime;
    //             mins.innerHTML = mt;
    //             seconds.innerHTML = st;
    //             setInterval(st--, 1000)
    //         }
    //         mt--
    //     }
    // }

//     setInterval(() => {
//         while (secondtime > -1) {
//         hours.innerHTML = hourtime;
//                 mins.innerHTML = mintime;
//                 seconds.innerHTML = secondtime;
//                 //setInterval(less(secondtime), 1000)
//                 setInterval(() => {
//                     secondtime--
//                     console.log(secondtime)
//                 }, 1000)
//                 //secondtime = less(secondtime)
//                 console.log(secondtime)

//     }
//     console.log('hey')
// }, 1000)

// }

// let less = (sec) => {
//     let secon = sec -1
//     return secon;
// }


            
                    //setInterval(less(secondtime), 1000)
                    //while(secondtime > -1) {
                        setInterval(() => {
                            secondtime - 1; 
                            hours.innerHTML = hourtime;
                            mins.innerHTML = mintime;
                            seconds.innerHTML = secondtime;
                        }, 1000)
                    //}
                    

}

countdown();

setInterval(countdown(), 1000)


// const totalSeconds = (currentDate - newYearsDate) / 1000;
//     console.log(totalSeconds)

// const days = Math.floor(totalSeconds / 3600 / 24);
//     const hours = Math.floor(totalSeconds / 3600) % 24;
//     const mins = Math.floor(totalSeconds / 60) % 60;
//     const seconds = Math.floor(totalSeconds) % 60;

//     daysEl.innerHTML = days;
//     hoursEl.innerHTML = hours;
//     minsEl.innerHTML = mins;
//     secondsEl.innerHTML = seconds;