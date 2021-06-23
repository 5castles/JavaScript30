const keys = document.querySelectorAll('.key');


function reset(event){
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
function handleKeydown(event){
    //attribute 접근방법도 css에서 접근방법과 똑같다 [atrb="value"]
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(audio === null) return;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
}

function init(){
    window.addEventListener('keydown', handleKeydown)
    //css transition 끝나면 원래 상태로 리셋하기
    keys.forEach(function(any){
        any.addEventListener('transitionend', reset);
    })
}
init();


/*
    javascript  keyCode 값은  https://keycode.info/
    audio.currentTime = 0;     // 재생 원하는 오디오가 이미 재생 중인 경우 재생안됨. currentTime=0; 설정하면 재생중일지라도 오디오 재생가능.
    audio.play()
    addEventListener('transitionend', function); // CSS transition 끝나는 경우. 
    this      // 아직 완벽히 이해 못한 경우 console.log(this)를 통해 간단히 this 확인 가능. 
*/