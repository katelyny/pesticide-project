$(document).ready(function(){ 
    
// list variables
    var flurLI = document.getElementById("list-FLUR"),
        clopLI = document.getElementById("list-CLOP"),
        bentLI = document.getElementById("list-BENT"),
        dichLI = document.getElementById("list-DICH"),
        mcppLI = document.getElementById("list-MCPP"),
        mcpaLI = document.getElementById("list-MCPA"),
        piclLI = document.getElementById("list-PICL"),
        tricLI = document.getElementById("list-TRIC"),
        dcimLI = document.getElementById("list-DCIM"),
        dcprLI = document.getElementById("list-DCPR");
    
    var list1 = [bentLI, clopLI, flurLI],
        list2 = [dichLI, mcppLI, mcpaLI, piclLI, dcprLI],
        list3 = [dichLI, bentLI],
        list4 = [mcpaLI, piclLI, tricLI],
        list5 = [dichLI, dcimLI, flurLI],
        list6 = [bentLI],
        list7 = [dichLI, dcimLI, mcppLI, clopLI];

//svg variables
    var FLUR = document.getElementById("FLUR"),
        CLOP = document.getElementById("CLOP"),
        BENT = document.getElementById("BENT");
    
    var DICH2 = document.getElementById("DICH2"),
        MCPP2 = document.getElementById("MCPP2"),
        MCPA2 = document.getElementById("MCPA2"),
        PICL2 = document.getElementById("PICL2"),
        DCPR2 = document.getElementById("DCPR2");
        
    var DICH3 = document.getElementById("DICH3"),
        BENT3 = document.getElementById("BENT3");
    
    var DICH4 = document.getElementById("DICH4"),
        MCPA4 = document.getElementById("MCPA4"),
        PICL4 = document.getElementById("PICL4"),
        TRIC4 = document.getElementById("TRIC4");
    
    var DICH5 = document.getElementById("DICH5"),
        DCIM5 = document.getElementById("DCIM5"),
        FLUR5 = document.getElementById("FLUR5");
    
    var BENT6 = document.getElementById("BENT6");
    
    var DICH7 = document.getElementById("DICH7"),
        DCIM7 = document.getElementById("DCIM7"),
        MCPP7 = document.getElementById("MCPP7"),
        CLOP7 = document.getElementById("CLOP7");

    var arrow = document.getElementById("arrow");
    var progress = document.getElementById("progress");

//background color change
    var $target = $('.wrapper');
    inView('.backgroundCol').on('enter', function(el){
        var color = $(el).attr('data-background-color');
        $target.css('background-color', color);
    });
//init ScrollMagic
    var controller = new ScrollMagic.Controller ();

//onload fade in main section
    $("#river").delay(200).animate({opacity:'1'},1000);   
    $('.svg-mainContainer').delay(500).animate({'opacity':'1'},1200);
    $('#main-text').delay(1300).animate({'marginTop':'+=-50px','opacity':'1'},800);

//arrow animation 
    var animation = new TimelineMax({repeat: -1})
     .to(arrow, 1.2,{scale:1.2, ease: Power1.easeOut})
     .to(arrow, 1,{scale:1, ease: Power1.easeInOut});
    
//on click arrow move to scroll
    $("#arrow").click(function() {
        $('html,body').animate({
            scrollTop: $("#scroll").offset().top},
        "slow");
    });
    
//onscroll main section fades //*crying* how do I code
    $(window).scroll(function(){
        $("#main").css("opacity", 1 - $(window).scrollTop()/400)
    }); 

//pin pest list
    var pinList = new ScrollMagic.Scene({
        triggerElement:'#pest-trigger', //starts trigger
        triggerHook:0.1 //trigger location 
    })
    .setPin('#pesticide-list') //pin the progress bar
//    .addIndicators({
//        name:'list'
//        })
    .addTo(controller)
    ;
    
////pin progress bar
    var pinProgress = new ScrollMagic.Scene({
        triggerElement:'#progress-bar', //starts trigger
        triggerHook:0.45
    })
    .setPin('#progress-bar') //pin the progress bar
//    .addIndicators({
//        name:'progress'
//        })
    .addTo(controller)
    ;
   

    function updateDistance () {
        var windowHeight = $(window).height();
        var m = (window.pageYOffset - windowHeight);
        var kilo = 0.0005 * m;
       
        if (kilo < 0){
            progress.innerHTML = 'distance:' + ' ' + '0.00' + ' ' + 'km';   
        } 
        else {
            progress.innerHTML = 'distance:' + ' ' + kilo.toFixed(2) + ' ' + 'km';
       } 
    }
    
    $(window).scroll(updateDistance);

  //scroll animation  
	$(function () { // wait for document ready
   
    var path1 = [{x:0,y: -100}, 
                 {x:125, y:-180},
                 {x:450, y:-200},
                 {x:850, y:-80},
                 {x: $(window).width() + 300,	y: -100}
                ],
        path2 = [{x:0,y: -100}, 
                 {x:250, y:-200},
                 {x:550, y:-100},
                 {x:750, y:-80},
                 {x: $(window).width() + 300,	y: -100}
                ],
        path3 = [{x:0,y: -100}, 
                 {x:455, y:-200},
                 {x:650, y:80},
                 {x: $(window).width() + 300,	y: -100}
                ],
        
        tl1 = new TimelineMax(),
        tl2 = new TimelineMax(),
        tl3 = new TimelineMax(),
        tl4 = new TimelineMax(),
        tl5 = new TimelineMax(),
        tl6 = new TimelineMax(),
        tl7 = new TimelineMax();
        
    tl1.to(FLUR, 2, {bezier:{curviness: 1, values: path1}, ease:Power1.easeInOut})
        .to(CLOP, 2, {bezier:{curviness: 1, values: path2}, ease:Power1.easeInOut})
        .from(BENT, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut});
        
    tl2.to(DICH2, 2, {bezier:{curviness: 1, values: path1}, ease:Power1.easeInOut})
        .from(MCPP2, 2, {bezier:{curviness: 1, values: path2}, ease:Power1.easeInOut})
        .to(MCPA2, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut})
        .to(PICL2, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut})
        .from(DCPR2, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut});

    tl3.to(DICH3, 2, {bezier:{curviness: 1, values: path1}, ease:Power1.easeInOut})
        .to(BENT3, 2, {bezier:{curviness: 1, values: path2}, ease:Power1.easeInOut});
        
    tl4.to(DICH4, 2, {bezier:{curviness: 1, values: path1}, ease:Power1.easeInOut})
        .from(MCPA4, 2, {bezier:{curviness: 1, values: path2}, ease:Power1.easeInOut})
        .to(PICL4, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut})
        .to(TRIC4, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut});
        
    tl5.to(DICH5, 2, {bezier:{curviness: 1, values: path1}, ease:Power1.easeInOut})
        .from(DCIM5, 2, {bezier:{curviness: 1, values: path2}, ease:Power1.easeInOut})
        .to(FLUR5, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut});
        
    tl6.to(BENT6, 2, {bezier:{curviness: 1, values: path1}, ease:Power1.easeInOut});
        
    tl7.to(DICH7, 2, {bezier:{curviness: 1, values: path1}, ease:Power1.easeInOut})
        .from(DCIM7, 2, {bezier:{curviness: 1, values: path2}, ease:Power1.easeInOut})
        .to(MCPP7, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut})
        .to(CLOP7, 2, {bezier:{curviness: 1, values: path3}, ease:Power1.easeInOut});

		// scene1
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook:0.1, duration: 500, offset:8})
            .setPin("#loc1-title")
            .setTween(tl1)
            .setClassToggle(list1, "show")
//            .addIndicators({
//                name:'location1'
//            })						
            .addTo(controller)
            ;
        
        //scene 2
        var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook:0.1, duration: 500, offset:8})
            .setPin("#loc2-title")
            .setTween(tl2)
            .setClassToggle(list2, "show")
//            .addIndicators({
//                name:'location2'
//            })						
            .addTo(controller)
        ;
        
        //scene 3
        var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook:0.1, duration: 500, offset:8})
            .setPin("#loc3-title")
            .setTween(tl3)
            .setClassToggle(list3, "show")
//            .addIndicators({
//                name:'location3'
//            })						
            .addTo(controller)
        ;
        
        //scene 4
        var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", triggerHook:0.1, duration: 500, offset:8})
            .setPin("#loc4-title")
            .setTween(tl4)
            .setClassToggle(list4, "show")
//            .addIndicators({
//                name:'location4'
//            })						
            .addTo(controller)
        ;
                
        //scene 5
        var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", triggerHook:0.1, duration: 500, offset:8})
            .setPin("#loc5-title")
            .setTween(tl5)
            .setClassToggle(list5, "show")
//            .addIndicators({
//                name:'location5'
//            })						
            .addTo(controller)
        ;
    
        //scene 6
        var scene6 = new ScrollMagic.Scene({triggerElement: "#trigger6", triggerHook:0.1, duration: 500, offset:8})
            .setPin("#loc6-title")
            .setTween(tl6)
            .setClassToggle(list6, "show")
//            .addIndicators({
//                name:'location6'
//            })						
            .addTo(controller)
        ;
        
        //scene 7
        var scene7 = new ScrollMagic.Scene({triggerElement: "#trigger7", triggerHook:0.1, duration: 500, offset:8})
            .setPin("#loc7-title")
            .setTween(tl7)
            .setClassToggle(list7, "show")
//            .addIndicators({
//                name:'location7'
//            })						
            .addTo(controller)
        ;
    })

});