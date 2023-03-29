// Set the date we're counting down to
var countDownDate = new Date("jun 1, 2023 12:00:00 am").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




// ------------------------------
var bannercontainer = document.querySelector('.banner-container')
// console.log(bannercontainer);
// var listImage =[]
// listImage[0] = 'img1.jpg'
// listImage[1] = 'img2.jpg'
// listImage[2] = 'img3.jpg'

// function changeBg (){
  
//   for (var i =0 ; i<listImage.length ;i++){
//     if (listImage.length <0){
//       listImage[0]
      
//     }else {
//       bannercontainer.style.backgroundImage =`url(${listImage[i]})`
//     }
   
//     }
//     // console.log(listImage);

// }

// setInterval(()=>{changeBg ()} ,1000)


var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = ['img1.jpg'];
images[1] = ['img2.jpg'];
images[2] = ['img3.jpg'];

function changePicture() {
    bannercontainer.style.backgroundImage = `url(${images[i]})`;

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;



var menuToggle= document.getElementById('menuToggle')
console.log(menuToggle);
var mainNav = document.getElementById('mainNav')

menuToggle.addEventListener('click' ,function(){

  mainNav.classList.toggle('toggle')


})