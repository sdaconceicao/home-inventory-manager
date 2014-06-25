$(document).ready(function (){

   $( ".date" ).datepicker({ dateFormat: "yy-mm-dd" });
   $('#main-navigation .sub-menu > a').click(function () {
        var last = jQuery('.sub-menu.open', $('#sidebar'));
        last.removeClass("open");
        jQuery('.arrow', last).removeClass("open");
        jQuery('.sub', last).slideUp(200);
        var sub = jQuery(this).next();
        if (sub.is(":visible")) {
            jQuery('.arrow', jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("open");
            sub.slideUp(200);
        } else {
            jQuery('.arrow', jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(200);
        }
        var o = ($(this).offset());
        diff = 200 - o.top;
        if(diff>0)
            $(".sidebar-scroll").scrollTo("-="+Math.abs(diff),500);
        else
            $(".sidebar-scroll").scrollTo("+="+Math.abs(diff),500);
    });



});