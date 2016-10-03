// GLOBAL VARIABLES
var isFormValid = true;


// // checks image height, if its lower than the required, changes it.
// var imgHeight = $(".col-md-5 .col-md-6 .item a img").height();

// $(".col-md-5 .col-md-6 .item a img").each(function() {

//     var imgHeight = $(this).height();

//     if( imgHeight < 185 )
//     {
//         $(this).css("height", "100%");
//     }
// });


// init Isotope
var $grid = $('.portfolio-items').isotope({
    itemSelector: '.item'
});

// bind filter button click
$('.filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

// contact Get in Touch checking if all inputs are filled
$("#gform").submit(function(){

    // INPUT
    $("#gform input").each(function()
    {
        if($.trim($(this).val()).length == 0)
        {
            $(this).addClass('warning');
            isFormValid = false;
        }
        else
        {
            $(this).removeClass("warning");
        }
    });

    // TEXTAREA
    $("#gform textarea").each(function()
    {
        if($.trim($(this).val()).length == 0)
        {
            $(this).addClass('warning');
            isFormValid = false;
        }
        else
        {
            $(this).removeClass("warning");
            isFormValid = true;
        }
    });

    if(!isFormValid) {
        return false;
    }
});

$("#gform input").focus(function(){
    $(this).removeClass("warning");
});

$("#gform textarea").focus(function(){
    $(this).removeClass("warning");
});