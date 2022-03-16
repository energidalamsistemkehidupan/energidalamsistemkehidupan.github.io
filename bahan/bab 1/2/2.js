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

///contoh soal 
  var contoh=document.getElementById("contoh");
  function cekcontoh(){ 
    contoh.style.display="";
    contoh2sow.style.display="none";
    contoh3sow.style.display="none";
  }


  var latihan=document.getElementById("latihan");
  function ceklatihan(){ 
    latihan.style.display="";
  }

//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulan').hide();
    $('.contoh').hide();
    $('.latihanhide').hide();

  document.getElementById('vidio').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $('.sebelum').hide(100);
    $('.kesimpulan').show(100);
    $('.contoh').show(100);
    $('.latihanhide').show(100);
    
  }
  
});

//contoh soal

function contoh1_sow(){
  contoh1sow.style.display="";
  contoh2sow.style.display="none";
  contoh3sow.style.display="none";
  
  tombolcon1.style.background="black";
  tombolcon2.style.background="#07575B";
  tombolcon3.style.background="#07575B";
}

function contoh2_sow(){
  contoh1sow.style.display="none";
  contoh2sow.style.display="";
  contoh3sow.style.display="none";
  
  tombolcon1.style.background="#07575B";
  tombolcon2.style.background="black";
  tombolcon3.style.background="#07575B";
}

function contoh3_sow(){
  contoh1sow.style.display="none";
  contoh2sow.style.display="none";
  contoh3sow.style.display="";

  tombolcon1.style.background="#07575B";
  tombolcon2.style.background="#07575B";
  tombolcon3.style.background="black";
}

//Latihan
function check() {
  var ret=false;
  var myid=document.getElementById("myid");
  var myvar=myid.value;
  var x=4.5;
  if(myvar != x) { //value yg diijinkan hanya numerik, integer maupun float
      myid.style.color="#f00";

      ret=false;
      $("#jawabanbenar1").hide(0);
      $("#jawabansalah1").show(200);
  }
  
  if(myvar == x) { //value yg diijinkan hanya numerik, integer maupun float
      myid.style.color="green";

      ret=false;

      $("#jawabanbenar1").show(200);
      $("#jawabansalah1").hide(0);
  }
  return ret;
}

function check2() {
  var ret=false;
  var myid2=document.getElementById("myid2");
  var myvar2=myid2.value;
  var x1=2.5;
  if(myvar2 != x1) { //value yg diijinkan hanya numerik, integer maupun float
      myid2.style.color="#f00";;
      ret=false;

      $("#jawabanbenar2").hide(0);
      $("#jawabansalah2").show(200);
  }
  
  if(myvar2 == x1) { //value yg diijinkan hanya numerik, integer maupun float
      myid2.style.color="green";
      ret=false;

      $("#jawabanbenar2").show(200);
      $("#jawabansalah2").hide(0);
  }
  return ret;
}

function check3() {
  var ret=false;
  var myid3=document.getElementById("myid3");
  var myvar3=myid3.value;
  var x2=0.4;
  if(myvar3 != x2) { //value yg diijinkan hanya numerik, integer maupun float
      myid2.style.color="#f00";;
      ret=false;

      $("#jawabanbenar3").hide(0);
      $("#jawabansalah3").show(200);
  }
  
  if(myvar3 == x2) { //value yg diijinkan hanya numerik, integer maupun float
      myid3.style.color="green";
      ret=false;

      $("#jawabanbenar3").show(200);
      $("#jawabansalah3").hide(0);
  }
  return ret;
}

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