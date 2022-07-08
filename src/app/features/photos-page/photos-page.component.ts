import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {
  // base: string = "/assets/photos/";
  base: string = "/assets/test_photos/";

  photosLQ = [
      {path: `${this.base}0s.jpg`, alt: 'img'},
      {path: `${this.base}1s.jpg`, alt: 'img'},
      {path: `${this.base}2s.jpg`, alt: 'img'},
      {path: `${this.base}3s.jpg`, alt: 'img'},
      {path: `${this.base}4s.jpg`, alt: 'img'},
      {path: `${this.base}5s.jpg`, alt: 'img'},
      {path: `${this.base}6s.jpg`, alt: 'img'},
      {path: `${this.base}7s.jpg`, alt: 'img'},
      {path: `${this.base}8s.jpg`, alt: 'img'},
      {path: `${this.base}9s.jpg`, alt: 'img'},
      {path: `${this.base}10s.jpg`, alt: 'img'},
      {path: `${this.base}11s.jpg`, alt: 'img'},
      {path: `${this.base}12s.jpg`, alt: 'img'},
      {path: `${this.base}13s.jpg`, alt: 'img'},
      {path: `${this.base}14s.jpg`, alt: 'img'},
      {path: `${this.base}15s.jpg`, alt: 'img'}
  ];

  photosHD = [
    {path: `${this.base}0.jpg`, alt: 'img'},
    {path: `${this.base}1.jpg`, alt: 'img'},
    {path: `${this.base}2.jpg`, alt: 'img'},
    {path: `${this.base}3.jpg`, alt: 'img'},
    {path: `${this.base}4.jpg`, alt: 'img'},
    {path: `${this.base}5.jpg`, alt: 'img'},
    {path: `${this.base}6.jpg`, alt: 'img'},
    {path: `${this.base}7.jpg`, alt: 'img'},
    {path: `${this.base}8.jpg`, alt: 'img'},
    {path: `${this.base}9.jpg`, alt: 'img'},
    {path: `${this.base}10.jpg`, alt: 'img'},
    {path: `${this.base}11.jpg`, alt: 'img'},
    {path: `${this.base}12.jpg`, alt: 'img'},
    {path: `${this.base}13.jpg`, alt: 'img'},
    {path: `${this.base}14.jpg`, alt: 'img'},
    {path: `${this.base}15.jpg`, alt: 'img'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
