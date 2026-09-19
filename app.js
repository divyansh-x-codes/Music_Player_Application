const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const readline = require("readline");


const musicFolder = path.join(__dirname, "music");


// Get all songs 
let songs = fs.readdirSync(musicFolder);

songs = songs.filter(function (song) {
    return song.endsWith(".mp3");
});


let currentSong = 0;
let player = null;
let paused = false;
console.log("TERMINAL MUSIC PLAYER");

function playSong(){
    if (songs.length === 0){
        console.log("No songs found in this music folder");
        return;

    }
    // if another song is playing ,stop it
    if(player !== null){
        player.kill("SIGKILL");
        player = null;
    }
    // create complete song path
    let songPath = path.join(musicFolder, songs[currentSong]);
    console.log("\n>Playing: " + songs[currentSong]);
    //start song
    player = spawn("afplay",[songPath]);
    //song is playing 
    paused = false;
}
// play/pause song

function playPause(){
    if(player ==null){
        playSong();
        return ;
    }
    // if song is playing then paused it 
    if(paused === false){
        player.kill("SIGSTOP");
        paused = true;
        console.log(" || Paused:");

    }

}
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data",function(data){
    //for Play
    if(data[0] === 0x70){
        playPause();
    }
})




