document.addEventListener('DOMContentLoaded', function() {

let flag = false;

$(".video-open").modaal({
  start_open:flag, // ページロード時に表示するか
  overlay_close:true,//モーダル背景クリック時に閉じるか
  type: 'video',
  background: '#28BFE7', // 背景色
  overlay_opacity:0.8, // 透過具合
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
  });

//背景のyoutube
let scr = document.createElement('script');
scr.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(scr, firstScriptTag);
let ytPlayer;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('bgmovie', {
        videoId: '0u01tlNkWnA',      //動画のアドレス
        playerVars: {
            width: 100,
            height: 100,
            playsinline: 1,
            autoplay:1,
            fs:0,    
            rel: 0,
            controls: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            start: 5,
            end: 36,
        },    
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//ミュート再生
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}
//ループ再生
function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
    event.target.seekTo(6);
  }
}

});

