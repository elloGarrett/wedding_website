import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

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
