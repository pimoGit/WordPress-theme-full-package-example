jQuery(document).ready(function($) {
    
   "use strict";
    // height e width  project texbloc calculated in the function openTex (calling it)
    var pth, ptw;
    
/*CREATE COOKIES FOR INFO BANNER*/
    if($('#cookie-banner').length){
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
    }

   
    
    
    
/*LIGHTBOX Wishes */
function auguri() {	
    $('#overxmas14').animate({
    opacity: 1
    }, 500, function() {
    // Animation complete.
    });

    $('#overxmas14').click(function() {
        $('#overxmas14').animate({
            opacity: 0
          }, 500, function() {
            $('#overxmas14').css('display', 'none');
            $.cookie('sawish', 'true', { expires: 1, path: '/' });//1day cookies show
          });
    });
}

		
//PRELOADER

function afterPreload(target, delayz){
	$('.progetto.posn'+target+' img').delay(delayz).animate({
		opacity: 1
	  }, 500, function() {
		// Animation complete.
		$('.progetto.posn'+target+' .loader').addClass("dispnone");
	  });
}

$('#preloader').load(window.location+'preload/' , function(response, status, xhr) {
	if (status == "error") {
		var msg = "Sorry but there was an error: ";
		$("#page").html(msg + xhr.status + " " + xhr.statusText);
	} else{
		$('#preloader').remove();
		afterPreload(2, 100);
		afterPreload(3, 200);
		afterPreload(4, 300);
		afterPreload(7, 400);
		afterPreload(6, 500);
		afterPreload(5, 600);
		afterPreload(1, 700);
		afterPreload(0, 800);
		
		
		
		 if($('#overxmas14').length){ // IF [LIGHTBOX AUGURI]
            $('#portfolio .overall').delay(900).fadeOut(100, function() {
                // Animation complete.
                if($.cookie('sawish')){// if already see today
                    $('#overxmas14').remove();
                } else {
                auguri()
                }
            });
         } else { 
             $('#portfolio .overall').delay(900).fadeOut(100);
         }
		
	}
});
	
	
/*loading project's slide function*/
		function changeSlide(ltarget, backimgpp) {
			$('#primopiano .loader').removeClass("dispnone");
			$('#pslider-container').animate({
				opacity: 0
			  }, 500, function() {
				// Animation complete.
				
			$('#pslider-container').stop(true, true).load(ltarget, function(response, status, xhr) {
				if (status == "error") {
					var msg = "Sorry but there was an error: ";
					$("#pslider-container").html(msg + xhr.status + " " + xhr.statusText);
				} else{
                    
                    //Initialize
                    $("#pslider-container").singleSlider(".sps_images");
                    
					if(backimgpp){ // if I turn back to main project img
					//RESIZE main project IMG 
						//Variables recalculation
							//tot container div measurement
						 toth = $('#portfolio').height();
						 totw = $('#portfolio').width();
						
							//other projects measurement
						 pjh = (toth-3)/3;
						 pjw = (totw-4)/4;
					
							//width main project place 1 (height like side projects)
						 pjw1 = (pjw * 2) +1;
							//left projects place 1 and place 0
						 lftp1 = pjw + 1;
							//height project place 0 (widht like project place 1)
						 pjh0 = (pjh * 2) + 1;
						//
							//main project
							var propoz1 = pjw1 / pjh0;
							if (propoz1 >= 1.125) { //[width leads]
								$('#pslider-container  img').width(pjw1).height('auto');
							} else { //[height leads]
								$('#pslider-container  img').width(pjh0*1.125).height(pjh0);
							}
					// end RESIZE IMG main project
					}
					$('#pslider-container').animate({
						opacity: 1
					  }, 300, function() {
						// Animation complete.
							$('#primopiano .loader').addClass("dispnone");
							$('#portfolio .wait').fadeOut(300);//turn on interaction
					  });
				}
			});
				
			  });
		}
		
		
		function loadSlide(){
			changeSlide($('.progetto.ovhere .overl .info').attr("rel"), 0);
		};
		function UnloadSlide(){
			changeSlide($('#backpp').attr("rel"), 1);
		};

/*slider*/
	
//MEASUREMENT and MAKING projects positions perfect

//VARIABLES

	var loadarch = 1;

	var mediaqlimit = 960;
	var tablethlimit = 900;
		//tot container div measurement
	var toth = $('#portfolio').height();
	var totw = $('#portfolio').width();
	
		//side projects measurement
	var pjh = (toth/3) - 2;
	var pjw = totw/4;

		//top projects place 3 and place 6
	var topp36 = toth/3;
		//width  project place 1 (height like side projects)
	var pjw1 = (totw/2) -3;
		//left  projects place 1 and place 0
	var lftp1 = pjw + 1;
		//height project place 0 (width like  project place 1)
	var pjh0 = ((toth/3) * 2) - 2;
	
//

var resizing = function(){
	
//Variables recalculation
		//tot container div measurement
	 toth = $('#portfolio').height();
	 totw = $('#portfolio').width();
	
		//measurement side projects
	 pjh = (toth-3)/3;
	 pjw = (totw-4)/4;

		//top projects place 3 and place 6
	 topp36 = ((toth-3)/3)+1;
		//width  project place 1 (height like side projects)
	 pjw1 = (pjw * 2) +1;
		//left  projects place 1 and place 0
	 lftp1 = pjw + 1;
		//height project place 0 (width like  project place 1)
	 pjh0 = (pjh * 2) + 1;
//
					
	
	$('.progetto:not(.posn0)').css('height', pjh);
	$('.progetto:not(.posn1):not(.posn0)').css('width', pjw);
	
		//top projects place 3 and place 6
	$('.progetto.posn3, .progetto.posn6').css('top', topp36);
	
		///width  project place 1 (height like side projects)
	$('.progetto.posn1, #primopiano').css('width', pjw1);
					
		//left  projects place 1 and place 0
	$('.progetto.posn1, #primopiano').css('left', lftp1);
	
		//height project place 0 (width like  project place 1)
	
	$('#primopiano').css('height', pjh0);
	
	//css manipulation  img measurement as well
	//all projects but place n.1 and n.0 (main)
	var propoz = pjw / pjh;
	if (propoz >= 1.25) { //[width leads]
		$('.progetto:not(.posn1):not(.posn0) img').removeAttr("height").removeAttr("width").width(pjw).height('auto');// progetti tranne posizione n.1
	} else { //[height leads]
		$('.progetto:not(.posn1):not(.posn0) img').removeAttr("height").removeAttr("width").width('auto').height(pjh);//progetti 
	}
	//project place n.1
	var propoz1 = pjw1 / pjh;
	if (propoz1 >= 2.25) { //[width leads]
		$('.progetto.posn1 img').removeAttr("height").removeAttr("width").width(pjw1).height('auto');//progetto posizione n.1
	} else { //[height leads]
		$('.progetto.posn1 img').removeAttr("height").removeAttr("width").width('auto').height(pjh);//progetti 
	}
	
	//main project
	var propoz1 = pjw1 / pjh0;
	if (propoz1 >= 1.125) { //[width leads]
		$('#pslider-container, #pslider-container .sps_images img, #pslider-container .sps_images ul li, #pslider-container  img').width(pjw1).height('auto');
	} else { //[height leads]
		$('#pslider-container, #pslider-container .sps_images img, #pslider-container .sps_images ul li, #pslider-container  img').width(pjh0*1.125).height(pjh0);
	}
	
	//position and measurement texbox
		$('.tex:not(.tbn1):not(.notyet)').width(pjw1-14).height(pjh-14);// progetti tranne posizione n.1
		$('.tex:not(.tbn1)').css('left', lftp1);// progetti tranne posizione n.1
		$('.tex.tbn1:not(.notyet)').width(pjw-14).height((pjh*2)-13);// progetti tranne posizione n.1
	
}



// opening texbox function
function openTex(th, tw, target, op){
if (totw<mediaqlimit && Modernizr.touch) { //if smartphone
 $('#portfolio').addClass('noscroll');
}
$('.tex.'+target).stop(true, true).animate({
	opacity: op,
	height: th,
	width: tw
	}, 200, function() {
	$('.tex.'+target+' .close').stop(true, true).animate({
		height: 18,
		width: 40
		}, 200);
	});
}


//INITIALIZATIONS


	//setting disable/overall div giving it opacity:0
$('#portfolio .overall').fadeTo(10, 0.4);

	//setting texts giving them opacity:0
$('.tex').animate({
	opacity: 0
	}, 10); 

	//setting projects imgs for  preloading giving them opacity:0
$('.progetto img').animate({
	opacity: 0
  }, 10, function() {
	// Animation complete.
	$('.progetto img').removeClass('start');// remove strating class 
  });

if (totw<mediaqlimit  && Modernizr.touch) { //if iphone
	// hide status bar on smartphones

} else {
	resizing(); //calculating measurements and positions projects block  loading the page
}



$(window).resize(function () { //recalculating measurements and positions projects block  resizing the page

	 totw = $('#portfolio').width();
	 toth = $('#portfolio').height();

if (totw<mediaqlimit && Modernizr.touch) {//if smartphone
	$('#pslider-container').width(totw);
	$('.tex:not(.notyet)').width(totw-13).height(toth-40);// all projects but place n.1
} else {
	resizing();
}



}); 

//if on TABLET (edge case  changing  device orientation  change version)
	if((($(window).width() > mediaqlimit) || ($(window).height() > tablethlimit))  && Modernizr.touch){ //if tablet changing  device orientation
	// Listen for orientation changes
	window.addEventListener("orientationchange", function() {
		// Announce the new orientation number
		
		document.location.reload(true);


	}, false);
}
//

//interaction
if (totw<mediaqlimit && Modernizr.touch) { //if smartphone
	
	$('.progetto').click(function() {
		
		$('.progetto')
		
		var texrel = $(this).attr("mvtexrel");
				
		$('.tex.'+texrel).removeClass('notyet').addClass('seltex');
        
        $('.tex.'+texrel+' article').perfectScrollbar();//add fancy scroll bar
		
		pth = toth-40;
		ptw = totw-13;
		openTex(pth, ptw, texrel, 0.9);
			
		});
	
	
} else {

	$('.progetto').mouseenter(function() {
		$(this).addClass('ovhere');
		
		$('.progetto.ovhere:not(.selctd):not(.changed) .overl').stop(true, true).fadeTo(300, 0.7, function(){
			$('.progetto.ovhere .overl .info').animate({
				height: 20,
				width: 30
				}, 200);
			
			//opening tex panel		
		$('.progetto.ovhere .overl').click(function() {
			
			var texrel = $(this).attr("texrel");
			
			if(texrel=='tbn0'){//if main project
				//do nothing
			} else {
				$('#portfolio  .wait').fadeIn(300);//temporarily disable interaction
			}
			
			$('.progetto.ovhere').addClass('selctd');
			$('.tex.'+texrel).removeClass('notyet').addClass('seltex');
			$('#primopiano').addClass('changed');		
			$(this).stop(true, true).fadeOut(300);
			
			$('#portfolio .overall').fadeTo(300, 0.7, function() {
				if(texrel=='tbn1'){
					pth = ((pjh*2)-13);
					ptw = pjw-14;
					openTex(pth, ptw, texrel, 1);
				} else{
					pth = pjh-14;
					ptw = pjw1-14;
					openTex(pth, ptw, texrel, 1);
				}
                $('.tex.'+texrel+' article').perfectScrollbar();//add fancy scroll bar
			});
		
		
				loadSlide();
			
			});
	
	
			
		});
	});

}

	//closing  tex	panel
$('.tex .close').click(function() {
	
	$('#portfolio .wait').fadeIn(300);//temporarily disable interaction
	
	var closerel = $(this).attr("closerel");
	
	$(this).animate({
		height: 0,
		width: 0
		}, 200, function() {
			$('.tex.'+closerel).animate({
				opacity: 0,
				height: 0,
				width: 0
				}, 200, function() {
					if(totw<mediaqlimit && Modernizr.touch){//if smartphone
						//do nothing
						$('.progetto.selctd').removeClass('selctd');
						$('.tex.'+closerel).removeClass('seltex').addClass('notyet');
						$('#portfolio .wait').fadeOut(300);//enable interaction 
						 $('#portfolio').removeClass('noscroll');
					} else {
						$('.progetto.selctd').removeClass('selctd');
						$('.tex.'+closerel).removeClass('seltex').addClass('notyet');
						UnloadSlide();	
					}
					$('#portfolio .overall').fadeOut(300, function() {
						$('#primopiano').removeClass('changed');
					});
				});
			});
	});



//mouse leave
$('.progetto').mouseleave(function() {
	
	
	$('.progetto.ovhere .overl .info').stop(true, true).animate({
		height: 0,
		width: 0
		}, 200);
	$('.progetto.ovhere .overl').stop(true, true).fadeOut(300);
	$(this).removeClass('ovhere');
});



//MENU
$('#menu-portfolio .menu-item:not(.archive):not(.blog) a').click(function() {
	
	if (totw<mediaqlimit && Modernizr.touch) {//if smartphone
		var pt_move_l = '100%';
		var pt_move_r = '-100%';
	} else {
		var pt_move_l = '50%';
		var pt_move_r = '-50%';
	}
		
	var literef = $(this).attr("title");
	
	
	$('.liteb#'+literef).addClass('litetopen');
	$('#portfolio .overallxarch').fadeTo(100, 0.5);
	$('.disablemenu').show();
	$('#menu-portfolio .menu-item a').addClass('disbl');
	$(this).addClass('here').removeClass('disbl');

	
	$('#portfolio').animate({
					left: pt_move_l,
					right: pt_move_r
					}, 200, function() {
					// Animation complete.	
					$('.liteb#'+literef).fadeIn(200, function() {
						// Animation complete.
							$('#footer .social').addClass('evid');
								/*fancy scrollbar*/
							$('#'+literef+' .pagetex'+literef).perfectScrollbar();//add fancy scroll bar

						$('.liteb#'+literef+' .close').animate({
							height: 18,
							width: 40
							}, 100, function() {
							// Animation complete.
							closeLiteb();
							});
							
					});
					

	});
	
	
	
	

});


	/*closing panel (about/contact)*/
function closeLiteb(){
	$('.liteb.litetopen .close').click(function() {		
		$(this).animate({
					height: 0,
					width: 0
					}, 100, function() {
					// Animation complete.
					
					$('#portfolio').animate({
									left: 0,
									right:0
									}, 200, function() {
									// Animation complete.
									$('#portfolio .overallxarch').fadeOut(100);
									$('#menu-portfolio .menu-item a').removeClass('here').removeClass('disbl');
									$('.disablemenu').hide();
									$('#footer .social').removeClass('evid');
									$('.liteb.litetopen').fadeOut(200, function() {
										$('.liteb.litetopen').removeClass('litetopen');
							});
						});
					
					});	
	
	});
}

//ARCHIVE

	//opening
$('#menu-portfolio .menu-item.archive a').click(function() {
	
	$('.disablemenu').show();
	$('#menu-portfolio .menu-item a').addClass('disbl');
	$(this).addClass('here').removeClass('disbl');
	
	$('#portfolio .overallxarch').fadeTo(300, 0.5);
	
	if (totw<mediaqlimit && Modernizr.touch) {//if smartphone
		var pt_move_t = -201;
		var pt_move_b = 227;
	} else {
		var pt_move_t = -172;
		var pt_move_b = 226;
	}
	
	
	$('#portfolio').animate({
					top: pt_move_t,
					bottom: pt_move_b
					}, 100, function() {
					// Animation complete.					
										
					if(loadarch){//if first time
						$('#archive').css('display', 'block');
							$('#archive #loadarch').load($('#archive').attr("arcrel") , function(response, status, xhr) {
								if (status == "error") {
									var msg = "Sorry but there was an error: ";
									$("#archive").html(msg + xhr.status + " " + xhr.statusText);
								} else{
									//loaded
                                    
                                    //prj-arch.js
                                    if(loadarch){//if it is the first view	
                                            // setting projects's images for preloading set  opacity:0
                                        $('.progetto-arch img').fadeIn(500, function() {
                                                $('progetto-arch .loader').addClass("dispnone");
                                        });
                                    }
                                    //interaction
                                    $('.progetto-arch').mouseenter(function() {
                                        $('.progetto-arch .tex-arch.'+$(this).attr("texrel")).stop(true, true).fadeTo(300, 0.9);
                                        $('.progetto-arch .tex-arch.'+$(this).attr("texrel")+' article').perfectScrollbar();//add fancy scroll bar
                                    });
                                    $('.progetto-arch').mouseleave(function() {
                                        $('.progetto-arch .tex-arch.'+$(this).attr("texrel")).stop(true, true).fadeOut(300);

                                    });


/*fancy scrollbar*/
$('#contscroll').width($('#contscroll').width());//deve avere una width
$('#contarch').perfectScrollbar();//add fancy scroll bar
                                    
										loadarch = 0; //serìtting loading variable  to false
										//intro animation close
									$('#archive').addClass('open');
									$('#archive .close').animate({
										height: 18,
										width: 40
										}, 200);
									
								}
							});
						}else{
							
							$('#archive').addClass('open').show(function() {
										// Animation complete.
												//intro animation close
											$('#archive .close').animate({
												height: 18,
												width: 40
												}, 200);
									});
						}
        


					});
	});


	//closing
$('#archive .close').click(function() {
	
	if (totw<mediaqlimit && Modernizr.touch) {//if smartphone
		var pt_bk_t = 0;
		var pt_bk_b = 26;
	} else {
		var pt_bk_t = 29;
		var pt_bk_b = 25;
	}
	
	$(this).animate({
			height: 0,
			width: 0
			}, 100, function() {
			// Animation complete.
				$('#archive').removeClass('open').hide();
				

	
				$('#portfolio').animate({
								top: pt_bk_t,
								bottom:pt_bk_b
								}, 100, function() {
								// Animation complete.
								$('#portfolio .overallxarch').fadeOut(300);
								$('#menu-portfolio .menu-item a').removeClass('here').removeClass('disbl');
								$('.disablemenu').hide();

					
					});
				});
	
});

    //SLIDER function
    $.fn.singleSlider = function (in_el,par) {
        
        var jqx = $; //jquery
        var el = jqx(in_el, this);// inner element in the element of the function application
        var ul = jqx("ul", el);// ul in the inner element
        var li = jqx("li", el);// object/collection li in the ul
        var v = li.length;// object/collection li  length
        
        par = jqx.extend({ // params
            duration: 2000,
            delay: 2000,
            width: 900,
            height: 800,
            autoplay: true,
        }, par);


        function u(D) {
            ul.css({
                left: -D + "00%"
            })
        }
        jqx("<div>", el) // added div
            .css({
            width: "100%",
            visibility: "hidden",
            "font-size": 0,
            "line-height": 0
        })
            .append(jqx("li:first img:first", el)
            .clone()
            .css({
            width: "100%"
        }))
            .prependTo(el);
        ul.css({
            position: "absolute",
            top: 0,
            animation: "none",
            "-moz-animation": "none",
            "-webkit-animation": "none"
        });


        function i(D) {
            return ((D || 0) + v) % v
        }
        var C = navigator.userAgent; // browser check
        if ((jqx.browser.msie && parseInt(jqx.browser.version, 10) < 8) || (/Safari/.test(C))) {
            var b = Math.pow(10, Math.ceil(Math.LOG10E * Math.log(v)));
            ul.css({
                width: b + "00%"
            });
            li.css({
                width: 100 / b + "%"
            })
        } else {
            ul.css({
                width: v + "00%",
                display: "inline-block"
            });
            li.css({
                display: "table-cell",
                "float": "none",
                width: "auto"
            })
        }
        u(0);
        var k = [];

        k = jqx(k);
        k.css("visibility", "visible");

        function f(F, D, E) { // animate ul
            this.go = function (G) {
                jqx("ul", E)
                    .stop(true)
                    .animate({
                    left: (G ? -G + "00%" : (/Safari/.test(navigator.userAgent) ? "0%" : 0))
                }, F.duration, "singleanimation");
                return G
            }
        }
        var o = new f(par, k, el);
        var c = 0;

        function r(F, E, D) {
            if (isNaN(F)) {
                F = c + 1
            }
            F = i(F);
            if (c == F) {
                return
            }
            s(F, E, D)
        }
        function s(F, E, D) {
            var F = o.go(F, c, E, D);
            if (F < 0) {
                return
            }

            c = F;
            z()
        }


        var p;

        function z(D) {
            cleart();
            if (par.autoplay) {
                p = setTimeout(function () {
                    r()
                }, par.delay + (D ? 0 : par.duration))
            }
        }
        function cleart() {
            if (p) {
                clearTimeout(p)
            }
            p = null
        }
        function y(G, F, E, D) {
            cleart();
            G.preventDefault();
            r(F, E, D);
            z()
        }

        z(1);
        return this
    };
    $.extend($.easing, { // animation 
        singleanimation: function (jqx, f, el, h, g) {
            if (f == 0) {
                return el
            }
            if (f == g) {
                return el + h
            }
            if ((f /= g / 2) < 1) {
                return h / 2 * Math.pow(2, 10 * (f - 1)) + el
            }
            return h / 2 * (-Math.pow(2, - 10 * --f) + 2) + el
        }
    });


});