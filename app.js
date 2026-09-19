const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');
const readline = require('readline');


// for music folder join path command 
const musicFolderPath = path.join(__dirname,'music');

//songs read command

let songs = fs.readdirSync(musicFolderPath);
songs = songs.filter(function(song){
    return song.endsWith('.mp3');
});

// for current song index
let currentSong = 0;

// music process variable
let player = null;

//paause status
let paused = false;

//show playlist

function showPlaylist(){
    console.log('\nPlaylist:');
    for (let i = 0; i < songs.length; i++) {
        if (i === currentSong) {
            console.log(`> ${songs[i]} (current)`);
        } else {
            console.log(`  ${songs[i]}`);
        }
    }
    
}
showPlaylist(currentSong);