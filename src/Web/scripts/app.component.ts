import { Component } from "@angular/core";

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'top-baby-names-app',
  template: `
    <h1>{{title}}</h1>
    `,
    styles: []
})
export class AppComponent {
  title = 'Top Baby Names';
}
