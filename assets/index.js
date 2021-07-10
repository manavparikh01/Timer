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
let sample = document.querySelector('.sample')
let setsample = document.querySelector('.setsample')
let setDate = document.querySelector('.setDate')
let inputtime = document.querySelector('#inputtime')
let button = document.querySelector("#button")
let submit = document.querySelector("#submit")
const form = document.querySelector('form')
const days = document.getElementById("days")
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");
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
    //shiftshift.classList.add('notvisible')
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

setDate.addEventListener('click', () => {
//     sample.classList.toggle('hide')
//     setTimeout(() => {
        inputtime.style.display = 'block'
//     }, 1000)
    
})

button.addEventListener('click', () => {
    inputtime.style.display = 'none'
})

let indate;
let intime;
let datein;
let countDownDate;

submit.addEventListener('click', (e) => {
    e.preventDefault()
    indate = form.elements.day.value
    console.log(form.elements.day.value)
    intime = form.elements.time.value
    datein = `${indate} ${intime}`
    console.log('hi')
    countdownDate = new Date(datein).getTime();
    console.log(datein)
    var x = setInterval(function() {

        // Get today's date and time
        if (countdownDate == 0) {
            return
        }
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countdownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var dayso = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hourso = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minuteso = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var secondso = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
      //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      //   + minutes + "m " + seconds + "s ";
      
        days.innerHTML = dayso;
          hours.innerHTML = hourso;
          mins.innerHTML = minuteso;
          seconds.innerHTML = secondso;
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
      inputtime.style.display = 'none';
})

console.log(indate)
console.log(intime)
console.log(datein)


// inputtime.addEventListener('click', () => {
//     inputtime.style.display = 'none'
// })



// let timeUp = (countDownDate) => {

// let countdownDateTime = countDownDate

//}


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

// let hourtime = 0
// let mintime = 1
// let secondtime = 15

//var countDownDate = new Date("Jan 5, 2022").getTime();

// Update the count down every 1 second




// let countdown = () => {
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
                        // setInterval(() => {
                        //     secondtime - 1; 
                        //     hours.innerHTML = hourtime;
                        //     mins.innerHTML = mintime;
                        //     seconds.innerHTML = secondtime;
                        // }, 1000)
                    //}
                    

//}

// countdown();

// setInterval(countdown(), 1000)


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