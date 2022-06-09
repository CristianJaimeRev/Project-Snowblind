window.reproducir = function() {
    document.getElementById("view").play();
};

window.pausar = function() {
    document.getElementById("view").pause();
};

window.muted = function() {
    document.getElementById("view").muted = true;
};

window.voice = function() {
    document.getElementById("view").muted = false;
};

window.volumeup = function(){
    if (document.getElementById("view").volume < 1){
        document.getElementById("view").volume+=0.1;
    }
  }

window.volumedown = function(){
    if (document.getElementById("view").volume > 0.1){
        document.getElementById("view").volume-=0.1;
    }
  }

window.secondup = function(){
   
        document.getElementById("view").currentTime += 10;
    
  }

window.seconddown = function(){
   
        document.getElementById("view").currentTime -= 10;
  
 }

 window.reload = function(){
   
    document.getElementById("view").currentTime = 0;

}
