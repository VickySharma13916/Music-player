console.log("Hello world, Welcome to ganna.com");

//Initalize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressbar');
let gif1 = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Hawayein", filePath: "songs/Hawayein.mp3", coverPath: "cover/Hawayein.jpg" },
    { songName: "Shayad - Love Aaj Kal", filePath: "songs/Shayad - Love Aaj Kal.mp3", coverPath: "cover/shayad.jpg" },
    { songName: "Nashe Si chad gaye", filePath: "songs/Nashe Si chad gaye - Arijit Singh - 320kbps.mp3", coverPath: "cover/Nashe si chad gye-befikre.jpg" },
    { songName: "Agar tum sath ho", filePath: "songs/Agar Tum Saath Ho(PagalWorldl).mp3", coverPath: "cover/agar tum sath ho.jpg" },
    { songName: "Tum Hi Ho", filePath: "songs/01 Tum Hi Ho -Aashiqui 2 (Arijit Singh) 320Kbps", coverPath: "cover/tum hi ho-aashiqui-2.jpg" },
    { songName: "Pal", filePath: "songs/Pal.mp3", coverPath: "cover/pal-jalebi.jpg" },
    { songName: "Soch Na Sake", filePath: "songs/Soch Na Sake (Male).mp3", coverPath: "cover/Soch Na sake.jpg" },
    { songName: "Khairiyat", filePath: "songs/Khairiyat Happy - Chhichhore.mp3", coverPath: "cover/Khairiyat.jpg" },
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("Songnames")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif1.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif1.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate');
    //UpdateSeekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100
})

const makeALLPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeALLPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif1.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif1.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif1.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})