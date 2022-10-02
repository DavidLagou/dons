/* jQuery Script for Reveal */
/* The following demonstrates a very common narrative or structure when employing jQuery.
In this example, focus on that pattern rather then just the specifics of this effect. */

/* Elements of jQuery that you need to already be familiar with:
$('selector')            - How we target Elements
$('selector').property   -  Extract information about the given object
$('selector').event      - How we call a function, or trigger a series of events 
$('selector').effect     - Precreated animated sequences
*/
// Section 1 collecting data / information required for the build
var $corrected= $('.corrected');
// var img_width =$('.corrected img').width();
var img_width =$('.corrected img').width();

// var init_split = Math.round(img_width/2);
var init_split = Math.round(img_width/(1.6));


console.log($corrected,img_width,init_split);

// Section 2 : Setup of the initial appearance 

$corrected.width(init_split);

// Section 3:

$('.photoshop').mousemove(function(e){

var offX= e.offsetX || e.clientX-$corrected.offset().left;
$corrected.width(offX);
console.log(offX+" OFFY");
});


$('.photoshop').mouseleave(function(e){

    $corrected.stop().animate({width: init_split},2000);

});
