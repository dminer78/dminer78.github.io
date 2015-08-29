/* http://stackoverflow.com/questions/15231812/random-background-images-css3 */


/* TODO Change image sizes for more bandwidth friendliness */
if(screen.width <= 700 || screen.height <= 700) {
    var size = "mobile/";
} else {
    var size = "desktop/";
}
    
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

var imageRandom = Math.floor(Math.random() * images.length)

console.log("Using Image " + imageRandom + "as background")
$('html').css({'background-image': 'url(images/bg/' + size + images[imageRandom] + ')'});