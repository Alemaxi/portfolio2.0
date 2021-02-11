import { Component } from '@angular/core';
import { style, trigger, transition, state, animation, animate, sequence, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('Changing', [

      transition("routing1 <=> routing2", [
        style({ opacity: 0 }),
        animate('.8s'),
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';

  changing = 'routing1';
  prev = 0;

  chagingRouting(val) {
    if (val != this.prev) {
      this.changing = this.changing == 'routing1' ? this.changing = 'routing2' : this.changing = 'routing1';
    }
    this.prev = val
  }

}
