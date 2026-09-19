# 🎵 Terminal Music Player

A simple terminal-based music player built using Node.js.

This project allows users to play, pause, resume, stop, and switch between songs directly from the terminal using keyboard commands.

---

## 📌 Problem Statement

Build a terminal-based music player that runs from the command line using Node.js.

The application should allow users to control local music files using simple keyboard commands while demonstrating basic Node.js concepts such as file handling, process management, and terminal input.

---

## 🎯 Objective

The main objective of this project is to understand how Node.js can interact with:

- Local files and folders
- The terminal
- Keyboard input
- External processes
- Audio files

The project focuses on keeping the implementation simple and beginner-friendly.

---

## ✨ Features

- 🎵 Automatically detects `.mp3` files from the `music` folder
- ▶️ Play a song
- ⏸️ Pause a song
- ▶️ Resume a paused song
- ⏹️ Stop a song
- ⏭️ Play the next song
- ❌ Exit the application using `Q`
- ⌨️ Control the player using keyboard keys
- 🔄 Automatically stops the previous music process before playing another song

---

## 🎮 Keyboard Controls

| Key | Action |
|-----|--------|
| `P` | Play / Pause |
| `R` | Resume |
| `S` | Stop |
| `N` | Next Song |
| `Q` | Exit |

### Example

```text
P → Play the current song

P → Pause the current song

R → Resume the paused song

S → Stop the song

N → Play the next song

Q → Exit the application
