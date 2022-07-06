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
  }

  public closeRsvp(): void {
    const modal = this._document.getElementById("id01");
    if(modal != null){
      modal.style.display = "none";
    } 
  }

}
