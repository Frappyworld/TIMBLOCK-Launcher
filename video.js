// 再生開始したときに実行
const startTimer = function(){
  playtimer = setInterval(function(){

    playback_position.textContent = convertTime(videoElement.currentTime);
    slider_progress.value = Math.floor( (videoElement.currentTime / videoElement.duration) * videoElement.duration);
  }, 100);
};

// 停止したときに実行
const stopTimer = function(){
  clearInterval(playtimer);
  playback_position.textContent = convertTime(videoElement.currentTime);
};

// 再生時間の表記を「mm:ss」に整える
const convertTime = function(time_position) {
  
  time_position = Math.floor(time_position);
  let res = null;

  if( 60 <= time_position ) {
    res = Math.floor(time_position / 60);
    res += ":" + Math.floor(time_position % 60).toString().padStart( 2, '0');
  } else {
    res = "0:" + Math.floor(time_position % 60).toString().padStart( 2, '0');
  }

  return res;
};
