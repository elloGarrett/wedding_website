import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  keyStrokes: Array<string> = [];
  finalKeyStrokes: Array<string> = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

  constructor() { }

  ngOnInit(): void {
  }

  // Checks for Konami Code in array
  public checker = (arr:Array<string>, target:Array<string>) => target.every(v => arr.includes(v));

  // Detects Konami code and directs to secret page
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    let len = this.keyStrokes.length;
    // let containsAll: boolean = false;
    this.keyStrokes.push(event.key);
    // console.log("Input: " + this.keyStrokes);

    // containsAll = this.keyStrokes.every(element => {
    //   return this.finalKeyStrokes.includes(element);
    // });

    

    if(this.checker(this.finalKeyStrokes, this.keyStrokes))
    {
      console.log("Konami Code");
    }
    else{
      this.keyStrokes.splice(0);
    }
    // else{
    //   this.keyStrokes.splice(0);
    // }

    // console.log("Contains All: " + containsAll);

    // console.log("Key Pressed: " + event.key);
    // console.log("Last in push: " + this.keyStrokes[this.keyStrokes.length - 1]);

    // if(this.keyStrokes.length == 11 && this.keyStrokes[len - 1] == "Enter"){
    //   console.log("Enter")
    //   if(this.keyStrokes[len - 2] == "a"){
    //     console.log("a")
    //     if(this.keyStrokes[len - 3] == "b"){
    //       if(this.keyStrokes[len - 4] == "ArrorRight"){
    //         if(this.keyStrokes[len - 5] == "ArrowLeft"){
    //           if(this.keyStrokes[len - 6] == "ArrorRight"){
    //             if(this.keyStrokes[len - 7] == "ArrowLeft"){
    //               if(this.keyStrokes[len - 8] == "ArrowDown"){
    //                 if(this.keyStrokes[len - 9] == "ArrowDown"){
    //                   if(this.keyStrokes[len - 10] == "ArrowUp"){
    //                     if(this.keyStrokes[len - 11] == "ArrowUp"){
    //                       console.log("Triggered");
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

    
  }

}
