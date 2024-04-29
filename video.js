window.addEventListener('DOMContentLoaded', function(){

  const videoElement = document.querySelector("video");

  const btn_play = document.getElementById("btn_play");
  const btn_pause = document.getElementById("btn_pause");
  const playback_position = document.getElementById("playback_position");
  const end_position = document.getElementById("end_position");
  const slider_progress = document.getElementById("progress");

  let playtimer = null;

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

  // 動画ファイルの再生準備が整ったときに実行
  videoElement.addEventListener('loadeddata', (e)=> {

    slider_progress.max = videoElement.duration;

    playback_position.textContent = convertTime(videoElement.currentTime);
    end_position.textContent = convertTime(videoElement.duration);
  });

  // 動画ファイルが最後まで再生されたときに実行
  videoElement.addEventListener("ended", (e) => {
    stopTimer();
  });

  // 再生ボタンが押されたときに実行
  btn_play.addEventListener("click", (e) => {
    videoElement.play();
    startTimer();
  });

  // 一時停止ボタンが押されたときに実行
  btn_pause.addEventListener("click", (e) => {
    videoElement.pause();
    stopTimer();
    logPropery();
  });

  // プログレスバーが操作されたときに実行（メモリを動かしているとき）
  slider_progress.addEventListener("input", (e) => {
    stopTimer();
    videoElement.currentTime = slider_progress.value;
  });

  // プログレスバーが操作完了したときに実行
  slider_progress.addEventListener("change", (e) => {
    startTimer();
  });
});

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
