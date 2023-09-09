
// HM開閉チェックボックスを取得する
const hmCheck = document.getElementById('hmCheck')
// HM内リンクを取得する
const hmListItem = document.querySelectorAll('li.p-globalNav__listItem a')
// HM内リンクを配列にする
const hmAry = Array.from(hmListItem)
// forEachで回す
hmAry.forEach( function(element) {
    // HM内のリンクをクリックしたら
    element.addEventListener('click',function(){
        // checkedを外す
        hmCheck.checked = false;
    })
})

// newのliタグを全て取得
var newsList = document.querySelectorAll('#news li');
// liをループで処理
newsList.forEach(element => {
    // <span class="c-newsIcon"></span>の下にアイコンを入れたいので親要素として取得
    var parent = element.querySelector('span.c-icon');

    // 更新日時（yyyy.mm.dd）を取得して、.で年月日に分ける
    var time = element.querySelector('span.c-newsDate').innerText.split('.');

    // 公開日の日付オブジェクト生成
    var created = new Date();
    created.setFullYear(time[0]);
    created.setMonth(time[1] - 1); // setMonth()は0～11なので、1引く
    created.setDate(time[2]);
    created.setHours(0, 0, 0, 0); // 時間を00:00:00に指定

    // 今日の日時と1週間後の日時を生成
    var today = new Date(new Date().setHours(0, 0, 0, 0));
    created.setDate(created.getDate() + 7);

    // 公開から1週間以内ならNEWアイコン、1週間以上ならNEWSアイコンを付与
    if (created >= today) {
        // NEWアイコン用のHTMLを生成
        var icon = document.createElement('span');
        icon.className = 'c-newsIcon';
        icon.innerHTML = '<img src="img/top/new_icon.svg" alt="">';
        parent.after(icon); // 親要素の後ろにNEWアイコンを挿入
    } else {
        // NEWSアイコン用のHTMLを生成
        var icon = document.createElement('span');
        icon.className = 'c-newsIcon';
        icon.innerHTML = '<img src="img/top/news_icon.svg" alt="">';
        parent.after(icon); // 親要素の後ろにNEWSアイコンを挿入
    }
});

$('.p-slider').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 1025,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 3,//スライドを画面に2枚見せる
            slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
        }
        },
        {
            breakpoint: 768,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1.5,//スライドを画面に1枚見せる
                slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
            }
        }
    ]
});

