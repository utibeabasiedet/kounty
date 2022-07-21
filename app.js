const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minuteEl = document.getElementById('mins')
const secondEl = document.getElementById('secs')


const lauchDate = '24 Aug 2022'

function countDown() {
    const newLauchDate = new Date(lauchDate);
    const currentDate = new Date();

    const totalSeconds = (newLauchDate - currentDate)/1000

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)

    dayEl.innerHTML = formatTime(days)
    hourEl.innerHTML = formatTime(hours)
    minuteEl.innerHTML = formatTime(minutes)
    secondEl.innerHTML = formatTime(seconds)
    
    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }
    // console.log(days, hours, minutes, seconds)
}
countDown() 

setInterval(countDown, 1000)