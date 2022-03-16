//mengarahkan menit tertentu dengan button
//mengarahkan menit tertentu dengan button
var vid = document.getElementById("vidio");
function burung() { 
    vid.currentTime=0;
    vid.play();
  } 
  function salmon() { 
    vid.currentTime=97;
    vid.play();
  } 
  function penyu() { 
    vid.currentTime=152;
    vid.play();
  } 
  function lobster() { 
    vid.currentTime=217.5;
    vid.play();
  } 
  function bakteri() { 
    vid.currentTime=270;
    vid.play();
  } 
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulan').hide();
    $('.latihanhide').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.kesimpulan').show(100);
    $('.latihanhide').show(100);
    
  }
  
});


//Soal latihan 1
//Soal latihan 1
var q1s1=document.getElementById("q1s1");
var q1s2=document.getElementById("q1s2");
var q1s3=document.getElementById("q1s3");
var q1s4=document.getElementById("q1s4");

var q2s1=document.getElementById("q2s1");
var q2s2=document.getElementById("q2s2");
var q2s3=document.getElementById("q2s3");
var q2s4=document.getElementById("q2s4");

var jawaban1=0;var jawaban2=0;

function cek1(){

    
    if(document.getElementById("q1soal1").checked) {
      q1s1.style.display="";
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabansalah").show(200);
      jawaban1=2;
  } else{
      q1s1.style.display="none";
  }
  if(document.getElementById("q1soal2").checked) {
    q1s2.style.display="";
    $("#jawabanbenar1").show(200);
      $("#jawabansalah").hide(200);
      jawaban1=1;
  } else{
      q1s2.style.display="none";
  }
  if(document.getElementById("q1soal3").checked) {
    q1s3.style.display="";
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabansalah").show(200);
      jawaban1=2;
  } else{
      q1s3.style.display="none";
  }
  if(document.getElementById("q1soal4").checked) {
    q1s4.style.display="";
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabansalah").show(200);
      jawaban1=2;
  }  else{
      q1s4.style.display="none";
  }

}
//Soal latihan 2
//Soal latihan 2


function cek2(){

    
    if(document.getElementById("q2soal1").checked) {
      
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
      q2s1.style.display="";
  } else{
      q2s1.style.display="none";
  }
  if(document.getElementById("q2soal2").checked) {
    
    $("#jawabanbenar1").hide(200);  
    $("#jawabanbenar2").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
      q2s2.style.display="";
  } else{
      q2s2.style.display="none";
  }
  if(document.getElementById("q2soal3").checked) {
    
      $("#jawabanbenar2").show(200);
      $("#jawabansalah").hide(200);
      jawaban2=1;
      q2s3.style.display="";
  } else{
      q2s3.style.display="none";
  }
  if(document.getElementById("q2soal4").checked) {
      q2s4.style.display="";
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
  }  else{
      q2s4.style.display="none";
  }

}

//navigasi soal

function soal1_sow(){
    soal1sow.style.display="";
    soal2sow.style.display="none";
    
    tombol1.style.background="black";
    tombol2.style.background="#07575B";
    
    if(jawaban1==0){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
    
      jawabansalah.style.display="none";
  }
  if(jawaban1==1){
      jawabanbenar1.style.display="";
      jawabanbenar2.style.display="none";
      jawabansalah.style.display="none";
  }
  if(jawaban1==2){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabansalah.style.display="";
  }


}
function soal2_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="";
    
    tombol1.style.background="#07575B";
    tombol2.style.background="black";
    
    if(jawaban2==0){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
    
      jawabansalah.style.display="none";
  }
  if(jawaban2==1){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="";
      jawabansalah.style.display="none";
  }
  if(jawaban2==2){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabansalah.style.display="none";
  }
 

}

