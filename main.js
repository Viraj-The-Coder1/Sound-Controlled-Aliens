function listen(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1K0-YIdq7/model.json', modelloaded);
}
function modelloaded(){
    console.log("model is loaded!");
    classifier.classify(gotresult);
}
function gotresult(error,result){
    if (error){
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("icanhear").innerHTML = "I can hear- " + result[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy- " + (result[0].confidence*100).toFixed(2) + "%";
        random_number_R = Math.floor(Math.random()*255);
        random_number_G = Math.floor(Math.random()*255);
        random_number_B = Math.floor(Math.random()*255);
        document.getElementById("icanhear").style.color = "rgb("+random_number_R + ","+random_number_G+","+random_number_B+")";
        document.getElementById("accuracy").style.color = "rgb("+random_number_R + ","+random_number_G+","+random_number_B+")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if (result[0].label == "Claps"){
            img1.src = 'alien01.gif';
            img2.src = 'alien02.png';
            img3.src = 'alien03.png';
            img4.src = 'alien04.png';
        }
        else if (result[0] == "Snaps"){
            img1.src = 'alien01.png';
            img2.src = 'alien02.gif';
            img3.src = 'alien03.png';
            img4.src = 'alien04.png';
        }
        else if (result[0] == "Taps"){
            img1.src = 'alien01.png';
            img2.src = 'alien02.png';
            img3.src = 'alien03.gif';
            img4.src = 'alien04.png';
        }
        else if (result[0] == "Hum"){
            img1.src = 'alien01.png';
            img2.src = 'alien02.png';
            img3.src = 'alien03.png';
            img4.src = 'alien04.gif';
        }
    }
}