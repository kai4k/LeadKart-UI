// import { featuredSongs, popularSingers } from "./music-data";
// import song1 from "@/assets/images/dashboards/music/square/img-01.jpg"
// export function audioPlayer() {
//   return {
//     currentTime: 0,
//     featuredSongs: [],
//     popularSingers: [],
//     duration: 0,
//     isPlaying: false,
//     isMuted: false,
//     volume: 50,
//     previousVolume: 50,
//     currentSong: {
//         "id": 1,
//         "title": "Love Me Like You Do",
//         "artist": "Ellie Goulding",
//         "duration": "4:12 min",
//         "image": song1
//     },

//     init() {
//         let startID = 1478;
//         featuredSongs.forEach((music, index) => {
//             music.id = "FS-" + (startID + index).toString();
//         });
//         popularSingers.forEach((singer, index) => {
//             singer.id = "PS-" + (startID + index).toString();
//         });
//         featuredSongs = featuredSongs;
//         popularSingers = popularSingers;
// this.$refs.audio.currentTime = this.currentTime;
// this.updateDuration();
//     },

//     setCurrentSong(song: { musicID: string }) {
//       this.$refs.audio.currentTime = 0;
//       this.updateDuration();
//       this.currentSong = song;
//       this.isPlaying = false;
//       this.togglePlay();
//     },

//     togglePlaySongs(song: { musicID: string }) {
//       if (this.currentSong.musicID !== song.musicID) this.setCurrentSong(song);
//       else this.togglePlay();
//     },

//     togglePlay() {
//       if (this.isPlaying) {
//         this.$refs.audio.pause();
//       } else {
//         this.$refs.audio.play();
//       }
//       this.isPlaying = !this.isPlaying;
//     },

//     skip(seconds: number) {
//       this.$refs.audio.currentTime = Math.min(
//         this.duration,
//         Math.max(0, this.$refs.audio.currentTime + seconds)
//       );
//       this.currentTime = this.$refs.audio.currentTime;
//     },

//     seek(event: MouseEvent) {
//       const rect = event.target.getBoundingClientRect();
//       const offsetX = event.clientX - rect.left;
//       const newTime = (offsetX / rect.width) * this.duration;
//       this.$refs.audio.currentTime = Math.min(
//         this.duration,
//         Math.max(0, newTime)
//       );
//       this.currentTime = this.$refs.audio.currentTime;
//     },

//     toggleMute() {
//       this.isMuted = !this.isMuted;
//       this.$refs.audio.muted = this.isMuted;
//       if (this.isMuted) {
//         this.previousVolume = this.volume;
//         this.volume = 0;
//       } else {
//         this.volume = this.previousVolume;
//       }
//     },

//     updateVolume() {
//       this.$refs.audio.volume = this.volume / 100;
//       this.isMuted = this.volume === 0;
//     },

//     updateTime() {
//       this.currentTime = this.$refs.audio.currentTime;
//     },

//     updateDuration() {
//       this.duration = this.$refs.audio.duration;
//     },

//     formatTime(time: number): string {
//       if (isNaN(time)) {
//         return "00:00";
//       }
//       const minutes = Math.floor(time / 60);
//       const seconds = Math.floor(time % 60);
//       return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//     },
//   };
// }
