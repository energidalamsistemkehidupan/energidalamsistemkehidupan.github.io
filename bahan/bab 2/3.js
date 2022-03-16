
//memunculkan class setelah vidio selesai
//memunculkan class setelah vidio selesai
  $(document).ready(function(){
    $('.kesimpulan').hide();

  function myHandler(e) {
    $('.sebelum').hide(100);
  }
  
});

//Latihan 
function cek(){
  kesimpulansebelum.style.display="none";
  kesimpulan.style.display="";

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

  if(document.getElementById("s4benar").checked) {
    pil4.style.background="green";
    pil4.style.color="white";
  }  else{
    pil4.style.background="red";
    pil4.style.color="white";
  }

}
 