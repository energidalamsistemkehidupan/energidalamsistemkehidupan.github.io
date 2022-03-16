let energi = document.querySelector('.energi');
let sumer = document.querySelector('.sumer');
let sumber = document.querySelector('.sumber');
let transformasi = document.querySelector('.transformasi');
   
   $('.btn').click(function(){
        $(this).toggleClass("click");
        $('.sidebar').toggleClass("show");
      });

    $('.energi').click(function(){
      $('nav ul .energi-tampil').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");

      $('nav ul .sumer-tampil').removeClass("show1").hide(100);
      $('nav ul .sumber-tampil').removeClass("show2").hide(100);
      $('nav ul .transformasi-tampil').removeClass("show3").hide(100);
      energi.style.background="#043436";
      sumer.style.background="#07575B";
      sumber.style.background="#07575B";
      transformasi.style.background="#07575B";
    });

  $('.sumer').click(function(){
    $('nav ul .sumer-tampil').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");

    $('nav ul .energi-tampil').removeClass("show").hide(100);
    $('nav ul .sumber-tampil').removeClass("show2").hide(100);
    $('nav ul .transformasi-tampil').removeClass("show3").hide(100);
    energi.style.background="#07575B";
    sumer.style.background="#043436";
    sumber.style.background="#07575B";
    transformasi.style.background="#07575B";
  });

$('.sumber').click(function(){
  $('nav ul .sumber-tampil').toggleClass("show2");
  $('nav ul .tiga').toggleClass("rotate");

  $('nav ul .energi-tampil').removeClass("show").hide(100);
  $('nav ul .sumer-tampil').removeClass("show1").hide(100);
  $('nav ul .transformasi-tampil').removeClass("show3").hide(100);
  energi.style.background="#07575B";
  sumer.style.background="#07575B";
  sumber.style.background="#043436";
  transformasi.style.background="#07575B";
});


$('.transformasi').click(function(){
$('nav ul .transformasi-tampil').toggleClass("show3");
$('nav ul .empat').toggleClass("rotate");

$('nav ul .sumer-tampil').removeClass("show1").hide(100);
$('nav ul .sumber-tampil').removeClass("show2").hide(100);
$('nav ul .energi-tampil').removeClass("show").hide(100);
energi.style.background="#07575B";
sumer.style.background="#07575B";
sumber.style.background="#07575B";
transformasi.style.background="#043436";
});