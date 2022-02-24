// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // <div id="player"></div> 를 알아서 내부로직에 의해 찾음 , '#player' 할 필요가 없음
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', // 최초 재생할 youtube 영상 ID
        playerVars: {
            autoplay: true,             // 자동 재생
            loop: 1,                 // 반복 재생
            playList: 'An6LvWQuj_8'     // 반복 재생할 영상 id
        },
        events:{
            onReady: function(event){        // OnReady시 함수 실행
                event.target.mute()              
            }
        }
    });
}
