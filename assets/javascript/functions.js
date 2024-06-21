



document.addEventListener("DOMContentLoaded", function() {

//scroll into view on click
var clickable = document.querySelectorAll('.clickable');

clickable.forEach(function(element) {
    element.addEventListener("click", function() {
        var elementTop = this.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementTop, behavior: 'smooth' });
    });
});

// script del riproduttore audio


    var audio = document.getElementById("audio");
    var playPauseButton = document.getElementById("play-pause");
    var playIcon = document.getElementById("play-icon");
    var pauseIcon = document.getElementById("pause-icon");
    var seekBar = document.getElementById("seek-bar");
    var currentTimeDisplay = document.getElementById("current-time");
    var durationDisplay = document.getElementById("duration");

    // Play/Pause toggle
    playPauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline";
        } else {
            audio.pause();
            playIcon.style.display = "inline";
            pauseIcon.style.display = "none";
        }
    });

    // Update the seek bar as the audio plays
    audio.addEventListener("timeupdate", function() {
        var value = (audio.currentTime / audio.duration) * 100;
        seekBar.value = value;
        updateCurrentTime();
    });

    // Update the audio time when the seek bar is changed
    seekBar.addEventListener("input", function() {
        var time = (seekBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    // Update the duration display when metadata is loaded
    audio.addEventListener("loadedmetadata", function() {
        updateDuration();
    });

    function updateCurrentTime() {
        var minutes = Math.floor(audio.currentTime / 60);
        var seconds = Math.floor(audio.currentTime % 60);
        if (seconds < 10) { seconds = "0" + seconds; }
        currentTimeDisplay.textContent = minutes + ":" + seconds;
    }

    function updateDuration() {
        var minutes = Math.floor(audio.duration / 60);
        var seconds = Math.floor(audio.duration % 60);
        if (seconds < 10) { seconds = "0" + seconds; }
        durationDisplay.textContent = minutes + ":" + seconds;
    }
});


//pswd
document.addEventListener("DOMContentLoaded", function() {
    // Select the password input field and the start button
    const passwordInput = document.getElementById('parolachiave');
    const startButton = document.getElementById('start-play');
    const passErrata = document.getElementById('pass-errata');

    // Function to check the password
    function checkPassword() {
        return passwordInput.value === 'ciao';
    }

    // Add a click event listener to the send password button
    const sendPasswordBtn = document.getElementById('sendPasswordBtn');
    sendPasswordBtn.addEventListener('click', function() {
        if (checkPassword()) {
            startButton.classList.remove('hidden');
            // Additional actions to take when the password is correct and the game starts
            passErrata.classList.add("invisible");

        } else {
            // In case the password is incorrect
            passErrata.classList.remove("invisible");

            passErrata.innerHTML=("Password errata!");
        }
    });



//indovinelli

    // function to show the next indovinelli item
    function showNextIndovinelliItem(event) {
        const clickedDiv = event.target;
        const nextDivId = clickedDiv.dataset.toggleId;
        if (!nextDivId) {
            console.error("nextDivId is null or undefined");
            return;
        }
        const nextDiv = document.getElementById(nextDivId);
        if (!nextDiv) {
            console.error("Element with id " + nextDivId + " not found");
            return;
        }

        // hide the clicked div
        clickedDiv.hidden = true;

        // show the next div
        nextDiv.hidden = false;
    }

    // add click event listener to the divs with class "right-answer"
    const rightAnswerDivs = document.querySelectorAll('.right-answer');
    rightAnswerDivs.forEach(div => {
        div.addEventListener('click', showNextIndovinelliItem);
    });
});
