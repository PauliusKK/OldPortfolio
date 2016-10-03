jQuery(document).ready(function($) {

    $(document).foundation();
// $('.arrow').click(function() {
//     var obj = $('.rec-ul');
//     var transformMatrix = obj.css("-webkit-transform") ||
//         obj.css("-moz-transform")    ||
//         obj.css("-ms-transform")     ||
//         obj.css("-o-transform")      ||
//         obj.css("transform");
//     var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
//     var x = matrix[12] || matrix[4];//translate x
//     var y = matrix[13] || matrix[5];//translate y

//     if ( x <= -557 )
//     {
//         $(".arrow").css("display","none");
//     }

//     console.log(x);
// });

    // CALENDAR TODAY DATE
    var now = new Date();
    var month = (now.getMonth() + 1);
    var day = now.getDate();
    if(month < 10)
        month = "0" + month;
    if(day < 10)
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('#calendar').val(today);
    $('#calendar2').val(today);

    $(window).load(function()
    {
        $('#calendar').glDatePicker();
        $('#calendar2').glDatePicker();
    });


    // DIVS FADEOUT WHEN YOU CLICK OUTSIDE OF THE DIV
    $(document).mouseup(function (e)
    {
        var container = $(".shopping-info");
        var container2 = $(".content .menu");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut(350);
            container2.fadeOut(350);
        }
    });


    // LEFT CATEGORIES HOVER
    $(".left-cat-menu").on({
        mouseenter: function () {
            //stuff to do on mouse enter
            var hover = "#f5f5f5";

            $( this ).find( "li.first" ).css( "background-color", hover );
            $( this ).find( "li.second" ).css( "background-color", hover );
            $( this ).find( "li.third" ).css( "background-color", hover );
        },
        mouseleave: function () {
            //stuff to do on mouse leave
            $( this ).find( "li.first" ).css( "background-color", "white" );
            $( this ).find( "li.second" ).css( "background-color", "white" );
            $( this ).find( "li.third" ).css( "background-color", "white" );
        }
    });


    // MY ACCOUNT DROPDOWN
    $( ".content" ).on( "click", function()
    {
            $( ".content .menu" ).stop().fadeToggle( "fast" );
    });


    // SHOPPING CART ON CLICK
    $( ".shopping-cart" ).on( "click", function()
    {
            $( ".shopping-info" ).stop().fadeToggle( 350 );
    });


    // VERTICAL SCROLLING IN RECOMMENDED TAB
    $(function($) {


        (function() {
            var $frame = $('.recommended-row');
            var $slidee = $frame.children('ul').eq(0);
            var $wrap = $frame.parent();

            // Call Sly on frame
            $frame.sly({
                horizontal: 1,
                itemNav: 'basic',
                smart: 1,
                activateOn: 'click',
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                activatePageOn: 'click',
                speed: 200,
                elasticBounds: 1,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                moveBy: 800,

              //forward: $wrap.find('.arrow')
            });
        }());
    });
});