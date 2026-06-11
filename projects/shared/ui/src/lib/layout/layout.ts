import { DatePipe, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { environment } from '@business';

@Component({
  selector: 'lib-layout',
  imports: [NgClass, DatePipe],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  now = new Date();

  title = input.required<string>();

  activePage = input.required<
    'dashboard' | 'cultures' | 'graines' | 'recherche' | 'historique' | 'detail-plante'
  >();

  activatePage(
    page: 'dashboard' | 'cultures' | 'graines' | 'recherche' | 'historique' | 'detail-plante',
  ) {
    switch (page) {
      case 'dashboard':
        window.location.href = environment.urls.dashboard;
        break;
      case 'cultures':
        window.location.href = environment.urls.inprogress;
        break;
      case 'historique':
        window.location.href = environment.urls.history;
        break;
      case 'graines':
        window.location.href = environment.urls.stocks;
        break;
    }
  }
}
