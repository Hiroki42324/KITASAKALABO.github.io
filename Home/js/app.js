//htmlが読み込まれた後に開始
document.addEventListener('DOMContentLoaded', () => {

//ヘッダーフッター要素の位置取得
let header = document.querySelector('nav');
let footer = document.getElementById('footer');
let Hrec = header.getBoundingClientRect();
let Frec = footer.getBoundingClientRect();
let Hpos = Hrec.top;
let Fpos = Frec.bottom;

//メニュー詳細の表示設定
let school = document.getElementById('school');
let scpos = school.getBoundingClientRect();
let navdets = document.getElementById('navdet-s');
let study = document.getElementById('study');
let stpos = study.getBoundingClientRect();
let navdetg = document.getElementById('navdet-g');

school.addEventListener("mouseover", function(){
    navdets.classList.remove('dhidden');
});
school.addEventListener("mouseout", function(){
    navdets.classList.add('dhidden');
});
study.addEventListener("mouseover", function(){
    navdetg.classList.remove('dhidden');
    navdetg.translateY = scpos.left;
});
study.addEventListener("mouseout", function(){
    navdetg.classList.add('dhidden');
    navdetg.translateX = scpos.left;
});

//スクロールボタン
let upBtn = document.getElementById('upBtn');  //上ボタン
let downBtn = document.getElementById('downBtn');  //下ボタン
upBtn.onclick = function (u){
    u.preventDefault();
    scrollTo(0,Hpos);
} 
downBtn.onclick = function (f){
    f.preventDefault();
    scrollTo(0,Fpos);
} 

//スクロール判定及びメニューの編集
// var header = document.querySelector('nav');
var prevY = window.scrollY;
window.addEventListener('scroll', () => {
var currentY = window.scrollY;
if (currentY < prevY) {
    header.classList.remove('hidden');
} else if (currentY > 0) {
    header.classList.add('hidden');
}
prevY = currentY; // 前回のスクロール位置を更新
});

//ギャラリーの表示
var gararry = document.getElementsByClassName('gararry');

});

