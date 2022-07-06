import { Component, OnInit } from '@angular/core';

var audio = new Audio();
var playPauseBTN = document.getElementById('playPauseBTN') as HTMLElement;
var count = 0;

@Component({
  selector: 'noteblock',
  templateUrl: './noteblock.component.html',
  styleUrls: ['./noteblock.component.scss']
})
export class NoteblockComponent implements OnInit {
  base: string = "/assets/images/"
  noteFileName:string = 'Minecraft-NoteblockS.webp';
  noteClicked: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  noteClickEvent(): void {
    this.noteClicked = !this.noteClicked;
    if(this.noteClicked){
      this.noteFileName = 'Minecraft-NoteblockF.webp'
      this.playWait();
    }
    else{
      this.noteFileName = 'Minecraft-NoteblockS.webp'
      this.playWait();
    }
  }

  Wait = {
    song_title: 'Wait',
    audio_file: 'https://audio.jukehost.co.uk/JEHNBZ0KCNVDMfbtD85Oa4qVgshQybZz',
  };

  playWait() {
    audio.src = this.Wait.audio_file;
    if (count == 0) {
      count = 1;
      audio.play();
      if(playPauseBTN != null){
        playPauseBTN.innerHTML = 'Pause ⏸';
      }
    } 
    else {
      count = 0;
      audio.pause();
      if(playPauseBTN != null){
        playPauseBTN.innerHTML = 'Play ►';
      }
    }
  } 

}
