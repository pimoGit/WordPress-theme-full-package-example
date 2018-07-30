jQuery(document).ready(function($) {
    
    "use strict";
    
/*CREATE COOKIES FOR INFO BANNER*/
        $('#cookie-banner .cloz').click(function (event) {
            event.preventDefault();
            $('#cookie-banner').fadeOut( "slow" );
            $.cookie('readck', 'true', { expires: 7, path: '/' });
        });
        
        if($.cookie('readck')){
            $('#cookie-banner').remove();
        } else{
            $('#cookie-banner').fadeIn( "slow" );
        }
	


});