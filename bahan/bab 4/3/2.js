//Soal latihan 1
//Soal latihan 1
var q1s1=document.getElementById("q1s1");
var q1s2=document.getElementById("q1s2");
var q1s3=document.getElementById("q1s3");
var q1s4=document.getElementById("q1s4");
var jawaban1=0;var jawaban2=0;var jawaban3=0;

var q2s1=document.getElementById("q2s1");
var q2s2=document.getElementById("q2s2");
var q2s3=document.getElementById("q2s3");
var q2s4=document.getElementById("q2s4");

var q3s1=document.getElementById("q3s1");
var q3s2=document.getElementById("q3s2");
var q3s3=document.getElementById("q3s3");
var q3s4=document.getElementById("q3s4");

function cek1(){

    
    if(document.getElementById("q1soal1").checked) {
      q1s1.style.display="";
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      jawaban1=2;
  } else{
      q1s1.style.display="none";
  }
  if(document.getElementById("q1soal2").checked) {
    q1s2.style.display="";
    $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      jawaban1=2;
  } else{
      q1s2.style.display="none";
  }
  if(document.getElementById("q1soal3").checked) {
    q1s3.style.display="";
      $("#jawabanbenar1").show(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").hide(200);
      jawaban1=1;
  } else{
      q1s3.style.display="none";
  }
  if(document.getElementById("q1soal4").checked) {
    q1s4.style.display="";
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
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
        $("#jawabanbenar2").show(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").hide(200);
      jawaban2=1;
      q2s1.style.display="";
  } else{
      q2s1.style.display="none";
  }
  if(document.getElementById("q2soal2").checked) {
    $("#jawabanbenar1").hide(200);
    $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
      q2s2.style.display="";
  } else{
      q2s2.style.display="none";
  }
  if(document.getElementById("q2soal3").checked) {
    
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
      q2s3.style.display="";
  } else{
      q2s3.style.display="none";
  }
  if(document.getElementById("q2soal4").checked) {
    
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
      q2s4.style.display="";
  }  else{
      q2s4.style.display="none";
  }

}

//Soal latihan 3
//Soal latihan 3



function cek3(){

    
    if(document.getElementById("q3soal1").checked) {
        $("#jawabanbenar1").hide(200);
        $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
      q3s1.style.display="";
  } else{
      q3s1.style.display="none";
  }
  if(document.getElementById("q3soal2").checked) {
    
    $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      q3s2.style.display="";
      jawaban2=2;
  } else{
      q3s2.style.display="none";
  }
  if(document.getElementById("q3soal3").checked) {
    
      $("#jawabanbenar1").hide(200);
      $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").hide(200);
      $("#jawabansalah").show(200);
      jawaban2=2;
      q2s3.style.display="";
  } else{
      q3s3.style.display="none";
  }
  if(document.getElementById("q3soal4").checked) {
    $("#jawabanbenar1").hide(200);
    $("#jawabanbenar2").hide(200);
      $("#jawabanbenar3").show(200);
      $("#jawabansalah").hide(200);
      jawaban2=1;
      q3s4.style.display="";
  }  else{
      q3s4.style.display="none";
  }

}
//navigasi soal

function soal1_sow(){
    soal1sow.style.display="";
    soal2sow.style.display="none";
    soal3sow.style.display="none";

    tombol1.style.background="black";
    tombol2.style.background="#07575B";
    tombol3.style.background="#07575B";

    if(jawaban1==0){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="none";

      jawabansalah.style.display="none";
  }
  if(jawaban1==1){
      jawabanbenar1.style.display="";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="none";
      jawabansalah.style.display="none";
  }
  if(jawaban1==2){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="none";
      jawabansalah.style.display="";
  }


}
function soal2_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="";
    soal3sow.style.display="none";

    tombol1.style.background="#07575B";
    tombol2.style.background="black";
    tombol3.style.background="#07575B";

    if(jawaban2==0){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="none";

      jawabansalah.style.display="none";
  }
  if(jawaban2==1){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="";
      jawabanbenar3.style.display="none";
      jawabansalah.style.display="none";
  }
  if(jawaban2==2){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="none";
      jawabansalah.style.display="";
  }
 

}
function soal3_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="none";
    soal3sow.style.display="";

    tombol1.style.background="#07575B";
    tombol2.style.background="#07575B";
    tombol3.style.background="black";
    if(jawaban3==0){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="none";

      jawabansalah.style.display="none";
  }
  if(jawaban3==1){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="";
      jawabansalah.style.display="none";
  }
  if(jawaban3==2){
      jawabanbenar1.style.display="none";
      jawabanbenar2.style.display="none";
      jawabanbenar3.style.display="none";
      jawabansalah.style.display="";
  }

}