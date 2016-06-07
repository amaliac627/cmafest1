var audioPlayerObj = document.getElementById('audioplayer');
var sndPlaying = false;
var recObj = document.getElementById('record2');
var randSound = '';

function audiorandom() {

    rand = [
        'audio/shake.mp3',
        'audio/rockstar.mp3',
        'audio/mind.mp3', 'audio/ticks.mp3', 'audio/downtown.mp3', 'audio/blownaway.mp3', 'audio/night.mp3'
    ];
    var randSound = rand[Math.floor(Math.random() * rand.length)];
    alert('sound selected is ' + randSound);


}

//song = rand[randSound];
//audioPlayerObj.setAttribute('src', song);

function audioToggle() {


    if (sndPlaying == false) {


        audioPlayerObj.play();
        sndPlaying = true;
        recObj.classList.add("opacityfull");
        recObj.classList.remove("opacityless");




    } else {
        audioPlayerObj.pause();

        sndPlaying = false;
        recObj.classList.remove("opacityfull");
        recObj.classList.add("opacityless");
    }

}
