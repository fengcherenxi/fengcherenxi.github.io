// 1 监听键盘动作
// window.addEventListener('keydown', playSound);

// 2.建立playSound 用于播放对应的音频
function playSound(e){
    let keyNo = e.keyCode || this.getAttribute('data-key');//add
    const audio = document.querySelector(`audio[data-key="${keyNo}"]`);
    const key = document.querySelector(`div[data-key="${keyNo}"]`);
    if(!audio){
        return;
    }
    key.classList.add('playing') //#1 回傳element的class值(陣列)
    audio.currentTime = 0;
    audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('click', playSound)); //add
window.addEventListener('keydown', playSound);
function removeTransition(e){
    // 判断传入的propertyName是否为transform 如果不是 就退出
    // 如果是transform 则移除playing模式 不再发出声音
    if(e.propertyName !== 'transform'){
        return;
    }
    e.target.classList.remove('playing');
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

