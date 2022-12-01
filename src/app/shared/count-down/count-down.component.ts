import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;

  public dateNow = new Date();
  public dDay = new Date('June 16 2023 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference: number | undefined;
  public secondsToDday: number | undefined;
  public minutesToDday: number | undefined;
  public hoursToDday: number | undefined;
  public daysToDday: number | undefined;
  public message: string = "Countdown:";
  public displayCount: boolean = true;
  public isMobile:boolean = false;

  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));

    if(this.daysToDday == 0){
      this.message = "The day is upon us!";
      this.displayCount = false;
    }
    else if(this.daysToDday < 0){
      this.message = "The day has passed!";
      this.displayCount = false;
    }
  }

  ngOnInit() {
    // Initializes to mobile view accordingly
    if(window.innerWidth <= 600){
      this.isMobile = true;
    }

    // Changes to mobile view accordingly
    window.onresize = () => this.isMobile = window.innerWidth <= 600;

    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    if(this.subscription != undefined){this.subscription.unsubscribe();}
  }
  
}
