/* $('ul.expert__tabs').on('click', 'li:not(.expert__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('expert__tab_active')
    .closest('div.container').find('div.expert__content').removeClass('expert__content_active').eq($(this).index()).addClass('expert__content_active');
}); */
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: "bottom"
    
  });
/*   function onPanMove (e) {
    if (panStart) {
        var $ = getEvent(e);
        lastPosition.x = $.clientX;
        lastPosition.y = $.clientY;

        if (carousel) {
            if (!rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
        } else {
            if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
            if (moveDirectionExpected) { preventScroll = true; }
        }

        if (preventScroll) { e.preventDefault(); }
    }
}; */

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });