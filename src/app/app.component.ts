import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pauline becchetti website';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    console.log(window.pageYOffset);
    if (window.pageYOffset > 100) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  }
}
