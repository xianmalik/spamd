jQuery(document).ready(function($){
    $('.before-after').queue(function(){
        var $after = $(this).find('.after'),
    		img_height = $(this).find('.after img').height(),
    		init_split = Math.round(img_height/2);
        $after.height(init_split);
        $(this).height(img_height);
        $(this).find('.ba-slider').css('margin-top', -.5 * $(this).find('.ba-slider').height());
		$(this).mousemove(function(e){
            var offX  = (e.offsetY || e.clientY - $after.offset().top);
            $after.height(offX);
            $(this).find('.ba-slider').css('top', offX);
		});
		$(this).mouseleave(function(e){
            $after.stop().animate({ height: init_split },1000);
            $(this).find('.ba-slider').css('top', init_split);
        });
    });
});
