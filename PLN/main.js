var SpeechReconignition = window.webkitSpeechRecognition;

var recognition = new SpeechReconignition();

var Textbox = document.getElementById("textBox");

function start(){
    Textbox.innerHTML = " " ;
    console.log(Textbox)
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
var Content =event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
       if(Content == "tire minha Selfie"){
        console.log("tirando selfie ---");
        speak();
       }

}

function speak(){
    var synth = window.speechSynthesis;

    speakData = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterrance(speakData);
    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        takeSelfie();
        save();
    }, 5000)
}

camera = document.getElementById("camera")

Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90
});
function takeSelfie(){
    Webcam.snap(function(data_uri){
        documnet.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';

    })
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
    link.href = image;
    link.click();
}