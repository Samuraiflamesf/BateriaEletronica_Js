document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
  if(event.key === "Enter"){
    console.log('enter');
    composer()
  }
});

function composer() {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
    console.log(songArray);
  }
}
document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
    console.log(songArray);
  }
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

function playComposition(songArray) {
  let wait = 0;

  songArray.forEach((item) => {
    setTimeout(() => {
      playSound(`numpad${item}`);
    }, wait);
    wait += 200;
  });
}
