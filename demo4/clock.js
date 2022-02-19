//   01 先获取三个针分别的标签
const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')
// 02 设定定时器  每秒取得当前的时间 并显示在表盘中
setInterval(setDate,1000)
function setDate(){
    const now = new Date()
    const hour  = now.getHours()
    const min  = now.getMinutes()
    const second  = now.getSeconds()
    // console.log(now,hour,min,second)
    // 下面来计算每秒该转动的角度
    let secondsDegrees = ((second / 60) * 360);//每秒走 1/60 个转盘
    let minsDegrees = ((min / 60) * 360);//每秒走  1/（60*60） 个转盘
    let hoursDegrees = ((hour / 12) * 360);//每秒走 1/(12*60*60)个转盘
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minsDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}