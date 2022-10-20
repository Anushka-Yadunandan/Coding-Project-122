x = 0; 
y = 0;
draw_rect = "Apple.webp";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as:" + content ;

    if(content =="apple")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing apple";
        draw_apple = "set";
    }
}

function setup()
{
    canvas= createCanvas(900,600);
}
function draw(){

if(draw_apple == 'set') 
{
    apple(x,y,70,50);
    document.getElementById("status").innerHTML = "Apple is drawn. ";
    draw.apple == "";
}                                                            
} 