import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy {




  // ngOnChange > OnInit > DoCheck > AfterContentInit > AfterContentChecked > AfterViewInit > AfterViewChecked > Destroy

  ngOnInit(): void {
    console.log("Interval component OnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Interval component OnChange");
  }

  ngDoCheck() : void {
    console.log("Interval component doCheck");
  }
  ngAfterContentInit(): void {
    console.log('Interval component AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log("Interval component AfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Interval component AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Interval component AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Interval component OnDestroy");
    this.startCount();
  }


  count: number = 0;
  fullName: string= "";

  // interval variable is used to hold the reference to the JavaScript interval created by the setInterval() function
  // when you want to stop the interval, there is no direct way to do so, because there's no reference to the interval instance.
  interval: any;

  startCount() {
    // ms = millisecond
    this.interval = setInterval(() => {
      // write what you want to perform here
      this.count++;
    }, 1000);

  }

  stopCount() {
    clearInterval(this.interval);

  }

  onChange() {
    console.log("OnChange called");
  }

  resetCount() {
    this.count = 0;
  }
}
