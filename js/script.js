jQuery(document).ready(function($){
    $('.before-after').queue(function(){
        var $before = $(this).find('.before'),
    		img_height = $(this).find('.before img').height(),
    		init_split = Math.round(img_height/2);
        $before.height(init_split);
        $(this).height(img_height);
        $(this).find('.ba-slider').css('margin-top', -.5 * $(this).find('.ba-slider').height());
		$(this).mousemove(function(e){
            var offX  = (e.offsetY || e.clientY - $before.offset().top);
            $before.height(offX);
            $(this).find('.ba-slider').css('top', offX);
		});
		$(this).mouseleave(function(e){
            $before.stop().animate({ height: init_split },1000);
            $(this).find('.ba-slider').css('top', init_split);
        });
    });
});
