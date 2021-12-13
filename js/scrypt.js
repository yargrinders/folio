function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
ibg();

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__menu').click(function(){
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(".center").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 3
});
