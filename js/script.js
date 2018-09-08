
jQuery(function($){

	$.fn.accordion = function(option) {
	    
	    __accordion__main = $('.accordion-main');
	    __accodion = $('.accordion');
	    __accordion__title = $('.accordion-title');
	    __accodion__content = $('.accordion-content');
	    __accodion__active = 'active';
	    __accodion__active_added = "$('.active')";
	   
	    __this = $(this);

	    var settings = $.extend({
            color:'#cff06f',
            alwaysOpen:true,
        }, option);

	    __accordion__title.on('click',function(){
	    	__this = $(this);

	    	if(settings.alwaysOpen == true) {
	    		__this.parent().siblings().find(__accodion__content).slideUp();
	    		__this.next().slideDown();
	    		__this.parent().siblings().find('.'+__accodion__active).removeClass(__accodion__active);
	    		__this.addClass(__accodion__active);
	    		__this.parent().siblings().find(__accordion__title).css('background-color','#ffffff');
	    		__this.css('background-color',settings.color);
	    	}else {
	    		__this.parent().siblings().find(__accodion__content).slideUp();
	    		__this.next().slideToggle();
	    		__this.toggleClass(__accodion__active);
	    		__this.parent().siblings().find(__accordion__title).css('background-color','#ffffff');
	    		__this.css('background-color',settings.color);
	    	}

	    })
	};
});