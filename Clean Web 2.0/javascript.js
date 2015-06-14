$(document).ready(function() {
    // Remove CSS style of hover
    $("#header h1 a:hover").css('background','none');
    // Bind a mouseenter event to #header > h1 > element
    $('#header h1 a').bind('mouseenter',function() {
        //Insert a span > a element in DOM that we will fade in
        //with class name .logoHover
        $(this).before('<span class="logoHover"><a href="#">home</a></span>');
        $('.logoHover').hide().fadeIn().bind('mouseleave', function() {
            $(this).fadeOut('normal', function(){
                $(this).remove();
            });
        });
    });
});
