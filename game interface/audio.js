var audio=document.getElementById('audio'); 
var play=document.getElementById('play'); 
var count=0;
function playpause(){
    if(count==0)
    {
        count=1;
        audio.play();
        play.innerHTML="&#9208;";
    }
    else{
        count=0;
        audio.pause();
        play.innerHTML="&#9658;";
    }
}
