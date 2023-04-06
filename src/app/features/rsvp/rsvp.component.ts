import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public _document:Document){}

  ngOnInit(): void {
    // Initializes buttons to disabled
    let yesSubmit = this._document.getElementById("yesSubmit");
    let noSubmit = this._document.getElementById("noSubmit");
    yesSubmit?.setAttribute('disabled', '');
    noSubmit?.setAttribute('disabled', '');
  }

  openRsvp(): void{
    const modal = this._document.getElementById("id01") as HTMLDivElement;
    const form = this._document.getElementById("sheetdb-form") as HTMLFormElement;
    form.reset();
    this.inputEntries();
    modal.style.display = "block";
  }

  public closeRsvp(): void {
    const modal = this._document.getElementById("id01") as HTMLDivElement;
    if(modal != null){
      modal.style.display = "none";
    }
  }

  public showToast(): void {
    // Get the snackbar DIV
    const sb = this._document.getElementById("snackbar") as HTMLDivElement;
    // Add the "show" class to DIV
    sb.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ sb.className = sb.className.replace("show", ""); }, 3000);
  }

  public submitRsvp(): void {
    this.closeRsvp();
    this.showToast();
  }

  // Allows for keyboard navigation in the lightbox
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeRsvp();
    }
  }

  // Ensures that buttons are clickable only after filling out info
  public inputEntries(): void{
    let guestList = this._document.getElementById("guestList") as HTMLInputElement;
    let count = this._document.getElementById("count") as HTMLInputElement;
    let yesSubmit = this._document.getElementById("yesSubmit");
    let noSubmit = this._document.getElementById("noSubmit");

    if(guestList?.value == "" || count?.value == ""){
      yesSubmit?.setAttribute('disabled', '');
      noSubmit?.setAttribute('disabled', '');
    }
    else{
      yesSubmit?.removeAttribute('disabled');
      noSubmit?.removeAttribute('disabled');
    }
  }
}
