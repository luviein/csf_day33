import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_03aug';
  cards: any[] = [{
    title: "First title",
    body: "first title body content"
  },
  {
    title: "Second title",
    body: "second title body content"
  }]

  btnClicked(event: any) {
    console.log("button clicked @ app component >>>>> "+ event);
  }
}
