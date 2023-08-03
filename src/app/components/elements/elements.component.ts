import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit, AfterViewInit {

  @ViewChild("domParagraph1", {static: true}) myParagraphElement: ElementRef;

  categories = [];
  @ViewChildren("itemList") items: QueryList<string>;

  ngOnInit() : void {

    // changing content without editing HTML
    this.myParagraphElement.nativeElement.innerHTML = "It's 1145am"
    this.categories = [
      {
        value: "Angular"
      },

      {
        value: "View"
      },

      {
        value: "React"
      }
    ]
  }

  ngAfterViewInit(): void {
    console.log(this.myParagraphElement);
  }

  getCategory(event, category, i){
    console.log("event >>>>>>" + event);
    console.log("category >>>>>>" + category);
    console.log("index >>>>>>" + i);
    console.log("item list >>>>>>" + this.items);
  }
}
