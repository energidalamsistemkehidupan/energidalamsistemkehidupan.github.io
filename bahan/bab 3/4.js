
//cek hasil latihan
//variabel soal 1
var s1b=document.getElementById("s1b");
var s1s=document.getElementById("s1s");

var s2b=document.getElementById("s2b");
var s2s=document.getElementById("s2s");

var s3b=document.getElementById("s3b");
var s3s=document.getElementById("s3s");

var s4b=document.getElementById("s4b");
var s4s=document.getElementById("s4s");

var s5b=document.getElementById("s5b");
var s5s=document.getElementById("s5s");

//variabel soal 2
var s6b=document.getElementById("s6b");
var s6s=document.getElementById("s6s");

var s7b=document.getElementById("s7b");
var s7s=document.getElementById("s7s");

var s8b=document.getElementById("s8b");
var s8s=document.getElementById("s8s");

var s9b=document.getElementById("s9b");
var s9s=document.getElementById("s9s");

var s10b=document.getElementById("s10b");
var s10s=document.getElementById("s10s");

//variabel soal 3
var s11b=document.getElementById("s11b");
var s11s=document.getElementById("s11s");

var s12b=document.getElementById("s12b");
var s12s=document.getElementById("s12s");

var s13b=document.getElementById("s13b");
var s13s=document.getElementById("s13s");

var s14b=document.getElementById("s14b");
var s14s=document.getElementById("s14s");

var s15b=document.getElementById("s15b");
var s15s=document.getElementById("s15s");

//variabel soal 5
var q5s1=document.getElementById("q5s1");
var q5s2=document.getElementById("q5s2");
var q5s3=document.getElementById("q5s3");
var q5s4=document.getElementById("q5s4");

//cek soal 1-3
function ceksoal1(){
    if(document.getElementById("soal1").checked) {
        s1b.style.display="";
        s1s.style.display="none";
    }else {

        s1b.style.display="none";
        s1s.style.display="";
    }
    if(document.getElementById("soal2").checked) {
        s2b.style.display="none";
        s2s.style.display="";
    }else {

        s2b.style.display="";
        s2s.style.display="none";
    }
    if(document.getElementById("soal3").checked) {
        s3b.style.display="";
        s3s.style.display="none";
    }else {
        s3b.style.display="none";
        s3s.style.display="";
    }
    if(document.getElementById("soal4").checked) {
        s4b.style.display="none";
        s4s.style.display="";
    }else {

        s4b.style.display="";
        s4s.style.display="none";
    }
    if(document.getElementById("soal5").checked) {
        s5b.style.display="none";
        s5s.style.display="";
    }else {
        s5b.style.display="";
        s5s.style.display="none";
    }

    $("#jawabanbenar1").show(200);
  }

  
function ceksoal2(){
  if(document.getElementById("soal6").checked) {
      s6b.style.display="none";
      s6s.style.display="";
  }else {

      s6b.style.display="";
      s6s.style.display="none";
  }
  if(document.getElementById("soal7").checked) {
      s7b.style.display="none";
      s7s.style.display="";
  }else {

      s7b.style.display="";
      s7s.style.display="none";
  }
  if(document.getElementById("soal8").checked) {
      s8b.style.display="none";
      s8s.style.display="";
  }else {
      s8b.style.display="";
      s8s.style.display="none";
  }
  if(document.getElementById("soal9").checked) {
      s9b.style.display="";
      s9s.style.display="none";
  }else {

      s9b.style.display="none";
      s9s.style.display="";
  }
  if(document.getElementById("soal10").checked) {
      s10b.style.display="";
      s10s.style.display="none";
  }else {
      s10b.style.display="none";
      s10s.style.display="";
  }

  $("#jawabanbenar2").show(200);
}

function ceksoal3(){
  if(document.getElementById("soal11").checked) {
      s11b.style.display="none";
      s11s.style.display="";
  }else {

      s11b.style.display="";
      s11s.style.display="none";
  }
  if(document.getElementById("soal12").checked) {
      s12b.style.display="";
      s12s.style.display="none";
  }else {

      s12b.style.display="none";
      s12s.style.display="";
  }
  if(document.getElementById("soal13").checked) {
      s13b.style.display="none";
      s13s.style.display="";
  }else {
      s13b.style.display="";
      s13s.style.display="none";
  }
  if(document.getElementById("soal14").checked) {
      s14b.style.display="";
      s14s.style.display="none";
  }else {

      s14b.style.display="none";
      s14s.style.display="";
  }
  if(document.getElementById("soal15").checked) {
      s15b.style.display="none";
      s15s.style.display="";
  }else {
      s15b.style.display="";
      s15s.style.display="none";
  }

  $("#jawabanbenar3").show(200);
}

//cek soal 4
function ceksoal4(){

  if(document.getElementById("s1benar").checked) {
    pil1.style.background="green";
    pil1.style.color="white";
  }  else{
    pil1.style.background="red";
    pil1.style.color="white";
  }

  if(document.getElementById("s2benar").checked) {
    pil2.style.background="green";
    pil2.style.color="white";
  }  else{
    pil2.style.background="red";
    pil2.style.color="white";
  }

  if(document.getElementById("s3benar").checked) {
    pil3.style.background="green";
    pil3.style.color="white";
  }  else{
    pil3.style.background="red";
    pil3.style.color="white";
  }

}

//cek soal 5
function ceksoal5(){

    
  if(document.getElementById("q5soal1").checked) {
      $("#jawabanbenar5").hide(200);
      $("#jawabansalah").show(200);
      jawaban5=2;
      q5s1.style.display="";
  } else{
      q5s1.style.display="none";
  }
  if(document.getElementById("q5soal2").checked) {
      $("#jawabanbenar5").show(200);
      $("#jawabansalah").hide(200);
      jawaban5=1;
      q5s2.style.display="";
  } else{
      q5s2.style.display="none";
  }
  if(document.getElementById("q5soal3").checked) {
      $("#jawabanbenar5").hide(200);
      $("#jawabansalah").show(200);
      jawaban5=2;
      q5s3.style.display="";
  } else{
      q5s3.style.display="none";
  }
  if(document.getElementById("q5soal4").checked) {
      $("#jawabanbenar5").hide(200);
      $("#jawabansalah").show(200);
      jawaban5=2;
      q5s4.style.display="";
  }  else{
      q5s4.style.display="none";
  }

}
//navigasi soal

function soal1_sow(){
    soal1sow.style.display="";
    soal2sow.style.display="none";
    soal3sow.style.display="none";
    soal4sow.style.display="none";
    soal5sow.style.display="none";

    tombol1.style.background="black";
    tombol2.style.background="#07575B";
    tombol3.style.background="#07575B";
    tombol4.style.background="#07575B";
    tombol5.style.background="#07575B";


}
function soal2_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="";
    soal3sow.style.display="none";
    soal4sow.style.display="none";
    soal5sow.style.display="none";

    tombol1.style.background="#07575B";
    tombol2.style.background="black";
    tombol3.style.background="#07575B";
    tombol4.style.background="#07575B";
    tombol5.style.background="#07575B";
 

}
function soal3_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="none";
    soal3sow.style.display="";
    soal4sow.style.display="none";
    soal5sow.style.display="none";

    tombol1.style.background="#07575B";
    tombol2.style.background="#07575B";
    tombol3.style.background="black";
    tombol4.style.background="#07575B";
    tombol5.style.background="#07575B";


}
function soal4_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="none";
    soal3sow.style.display="none";
    soal4sow.style.display="";
    soal5sow.style.display="none";

    tombol1.style.background="#07575B";
    tombol2.style.background="#07575B";
    tombol3.style.background="#07575B";
    tombol4.style.background="black";
    tombol5.style.background="#07575B";


}
function soal5_sow(){
    soal1sow.style.display="none";
    soal2sow.style.display="none";
    soal3sow.style.display="none";
    soal4sow.style.display="none";
    soal5sow.style.display="";

    tombol1.style.background="#07575B";
    tombol2.style.background="#07575B";
    tombol3.style.background="#07575B";
    tombol4.style.background="#07575B";
    tombol5.style.background="black";
}