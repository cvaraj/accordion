
jQuery(function($){

	$.fn.accordion = function(option) {
	    
	    __accordion__main = $('.accordion-main');
	    __accodion = $('.accordion');
	    __accordion__title = $('.accordion-title');
	    __accodion__content = $('.accordion-content');
	    __accodion__active = 'active';
	    __accodion__active_added = $('.active');
	    __click = 'click';
	   
	    __this = $(this);

	    var settings = $.extend({
            alwaysOpen:true,
            activePanel:'Null',
        }, option);

        if(__accordion__title.hasClass(__accodion__active)) {
        	__accodion__active_added.next().show();
        }

        __count = 1;	
    	__accodion.each(function(){
    		__this = $(this);
    		__this.attr('id','data-id-'+__count);
    		if(settings.activePanel == __count) {
    			$('#data-id-'+settings.activePanel).siblings().find(__accordion__title).removeClass(__accodion__active);
    			$('#data-id-'+settings.activePanel).siblings().find(__accodion__content).hide();
    			$('#data-id-'+settings.activePanel).find(__accodion__content).show();
    			$('#data-id-'+settings.activePanel).find(__accordion__title).addClass(__accodion__active);
    		}
    		__count ++;

    	});
        
	    __accordion__title.on(__click,function(){
	    	__this = $(this);

	    	if(settings.alwaysOpen == true) {
	    		__this.parent().siblings().find(__accodion__content).slideUp();
	    		__this.next().slideDown();
	    		__this.parent().siblings().find('.'+__accodion__active).removeClass(__accodion__active);
	    		__this.addClass(__accodion__active);
	    	}else {
	    		__this.parent().siblings().find(__accodion__content).slideUp();
	    		__this.next().slideToggle();
	    		__this.parent().siblings().find('.'+__accodion__active).removeClass(__accodion__active);
	    		__this.toggleClass(__accodion__active);
	    	}
	    	return false;
	    })
	};
});