//페이드
let k = 0;

setInterval(function(){
    k++

    if(k >= 3){
        k = 0
    }

    $('.fade li').fadeOut();
    $('.fade li').eq(k).fadeIn();
}, 2000)



//공지사항과 갤러리
$('.titlebox h2').eq(1).click(function(){
    $('.titlebox h2').removeClass()
    $('.titlebox h2').eq(1).addClass('on');

    $('.gallery').show();
    $('.notice').hide();
})


$('.titlebox h2').eq(0).click(function(){
    $('.titlebox h2').removeClass()
    $('.titlebox h2').eq(0).addClass('on')
    
    $('.gallery').hide();
    $('.notice').show();
})



//팝업
$('.notice li').eq(0).click(function(){
    $('.popup').show();
})

$('.popup a').click(function(){
    $('.popup').hide();
})