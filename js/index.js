$(function(){
	$(".head .left").click(function(){
		$(".head").css({display:"none"})
	})

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
	});
    var swiper1 = new Swiper('.swiper-container1');
    $(".lazy").lazyload({effect: "fadeIn"});

    var num=0;
    setInterval(function(){
    	num++;
    	$(".co").animate({"marginTop":-16*num},500);
    	if(num>=3){
    		num=-1;
    	}
    },2000)
})