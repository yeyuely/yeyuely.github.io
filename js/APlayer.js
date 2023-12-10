<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>const ap = new APlayer({
    container: document.getElementById('aplayer'),
	volume: 0.5,
    fixed: true,
	autoplay: true, //自动播放
    audio: [
        {
        name: 'Waltz',
        artist: 'Mike Paer',
        url: 'http://music.163.com/song/media/outer/url?id=1766269.mp3',
        cover: 'http://p1.music.126.net/yxlU5tqiFgSTVoPecsMTYw==/109951164850810890.jpg?param=177y177',
        }, 
	{
        name: 'Refrain',
        artist: '阿南亮子',
        url: 'http://music.163.com/song/media/outer/url?id=22712173.mp3',
        cover: 'http://p2.music.126.net/L9-d4kf-D27DkJ_0Uw6rAA==/109951166455944113.jpg?param=130y130',
        }, 
        {
        name: 'いのちの名前',
        artist: '広橋真紀子',
        url: 'http://music.163.com/song/media/outer/url?id=578090.mp3',
        cover: 'http://p2.music.126.net/EjmtoVVacC8hpP2Tnpeqiw==/109951163338317773.jpg?param=130y130',
        }, 
    ]
});
