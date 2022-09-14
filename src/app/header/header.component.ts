import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSoundsOn: boolean = false;
  isMenuBarOpened: boolean = false;

  constructor() {}

  ngOnInit(): void {
  //   let audio = new Audio();
  // audio.src = "assets/audio/OST.mp3";
  // audio.load();
  // audio.play();
  }

  onClickSounds() {

  }
}
