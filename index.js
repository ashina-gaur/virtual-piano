//calculating no of keys here in the keyboard
var numberofKeys=document.querySelectorAll(".key").length;
//creating a for loop to activate eventListener on each key
//First we add eventListener for a click
//Then we add an eventListener for a keypress
for(var i=0;i<numberofKeys;i++)
{
document.getElementsByClassName("key")[i].addEventListener("click", function() {
    
    var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});




function makeSound(key){
    switch(key)
    {
        case "a":
            var audio=new Audio('tones/a1.mp3');
            audio.play();
            break;
        case "b":
            var audio=new Audio('tones/b1.mp3');
            audio.play();
            break;
        case "c":
            var audio=new Audio('tones/c1.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('tones/d.mp3');
            audio.play();
            break;
        case "e":
            var audio=new Audio('tones/e1.mp3');
            audio.play();
            break;
        case "f":
            var audio=new Audio('tones/f1.mp3');
            audio.play();
            break;
        case "g":
            var audio=new Audio('tones/g1.mp3');
            audio.play();
            break;
        case "A":
            var audio=new Audio('tones/a2.mp3');
            audio.play();
            break;   
        case "B":
            var audio=new Audio('tones/b2.mp3');
            audio.play();
            break;     
         case "C":
            var audio=new Audio('tones/c2.mp3');
            audio.play();
            break; 
         case "D":
            var audio=new Audio('tones/d2.mp3');
            audio.play();
            break; 
         case "E":
            var audio=new Audio('tones/e2.mp3');
            audio.play();
            break; 
         case "F":
            var audio=new Audio('tones/f2.mp3');
            audio.play();
            break; 
        case "G":
            var audio=new Audio('tones/g2.mp3');
            audio.play();
            break;
        case "f1b":
            var audio=new Audio('tones/f1b.mp3');
            audio.play();
            break;
        case "g1b":
            var audio=new Audio('tones/g1b.mp3');
            audio.play();
            break;
        case "a1b":
            var audio=new Audio('tones/a1b.mp3');
            audio.play();
            break;   
        case "c1b":
            var audio=new Audio('tones/c1b.mp3');
            audio.play();
            break;     
         case "d1b":
            var audio=new Audio('tones/d1b.mp3');
            audio.play();
            break; 
        case "f2b":
            var audio=new Audio('tones/f2b.mp3');
            audio.play();
            break;
        case "g2b":
            var audio=new Audio('tones/g2b.mp3');
            audio.play();
            break;
        case "a2b":
            var audio=new Audio('tones/a2b.mp3');
            audio.play();
            break;   
        case "c2b":
            var audio=new Audio('tones/c2b.mp3');
            audio.play();
            break;     
         case "d2b":
            var audio=new Audio('tones/d2b.mp3');
            audio.play();
            break; 


    }

}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        activeButton=document.querySelector("."+currentKey).classList.toggle("pressed");
    },100);
}
