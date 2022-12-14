import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  setTimeoutAnimation: ReturnType<typeof setTimeout> = setTimeout(() => '', 4000);
  constructor() {}

  ngOnInit(): void {
    length = document.getElementById('definition')?.getElementsByTagName('div').length!;

    this.setTimeoutAnimation = setTimeout(() => {
      for(let i = 0; i < length; i++) {
        document.getElementById('definition')?.getElementsByTagName('div')[i].classList.remove('typing-animation');
        document.getElementById('definition')?.getElementsByTagName('div')[i].classList.add('rubberBand-animation');
        document.getElementById('definition')!.getElementsByTagName('div')[i].style.visibility = 'visible';
        document.getElementById('definition')!.getElementsByTagName('div')[i].style.overflow = 'visible';
      }
    }, 4000);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearTimeout(this.setTimeoutAnimation)
  }
}
