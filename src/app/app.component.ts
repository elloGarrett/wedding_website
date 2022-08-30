import { Component, HostListener, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wedding_website';

  keyStrokes: string = "";
  correctCode: string = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.keyStrokes = "";
  }

  // Detects Konami code and directs to secret page
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    this.keyStrokes += event.key;
    if(event.key == 'a'){

      if(this.keyStrokes.includes(this.correctCode)){
        this.router.navigate(['/secret']);
        this.keyStrokes = "";
      }
      else{
        this.keyStrokes = "";
      }
    }
  }
}
