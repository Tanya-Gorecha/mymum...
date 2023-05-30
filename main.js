var x=document.getElementById("hjhj");
var y=document.getElementById("jhjh");
var speechrecognition = window.webkitSpeechRecognition;
var recognition= new speechrecognition;
function start(){
    document.getElementById("anything").innerHTML= " ";
    recognition.start();
}
recognition.onresult= function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("anything").innerHTML=content;
if (content == "super cool like my mom"){
        x.play("hjhj.mp3");
    }
    if (content == "yes"){
        y.play("jhjh.mp3");
    }
    if (content == "i don't know"){
        y.play("jhjh.mp3");
    }
    if (content == "boo"){
        y.play("jhjh.mp3");
    }
    f (content == "lol"){
        y.play("jhjh.mp3");
    }
    f (content == "too cool"){
        y.play("jhjh.mp3");
    }
}
