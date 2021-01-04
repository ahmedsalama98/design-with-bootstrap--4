$(function() {

    var win = $(window);


    //onload page//
    win.on("load", function() {
            var loadpage = $(".load-page")

            loadpage.fadeOut(2000, function() {
                loadpage.remove()
            })
        })
        //onload page//

    //scroll-top//
    var scrollbut = $(".scroll-top");
    win.on("scroll", function() {

        if ($(this).scrollTop() >= 1500) {
            scrollbut.fadeIn()
        } else {
            scrollbut.fadeOut()
        }

    })

    scrollbut.click(function() {
        $("body,html").animate({
            scrollTop: "0"
        }, 1000)
    })

    //scroll-top//


    //shflling//
    $(".shuflle-click li").click(function() {

        var shuflingdiv = $(".shufle-imges>div");
        $(this).addClass("active").siblings().removeClass("active")

        if ($(this).data("target") == "all") {
            shuflingdiv.fadeIn();

        } else {
            shuflingdiv.hide();

            $($(this).data("target")).parent().fadeIn()
        }

    })

    //shflling//

    //trigger nicescroll/
    $("html").niceScroll({
        cursorwidth: "12px",
        cursorcolor: "#EC1D24",
        cursorborder: "#EC1D24",
        cursorborderradius: "0",
        zindex: "9999999999"

    })

    //trigger nicescroll/
    //trigger wow/
    new WOW().init();
    //trigger wow/

})