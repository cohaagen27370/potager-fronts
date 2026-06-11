import { Component, computed } from '@angular/core';
import { getDayOfYear } from 'date-fns';

@Component({
  selector: 'lib-season-strip',
  imports: [],
  templateUrl: './season-strip.html',
  styleUrl: './season-strip.css',
})
export class SeasonStrip {
  now = new Date();
  dayFromFirst = getDayOfYear(this.now);

  index = computed(() => (this.dayFromFirst / 365.0) * 100);
}
