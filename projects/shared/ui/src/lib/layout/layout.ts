import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-layout',
  imports: [NgClass],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  title = input.required<string>();

  activePage = input.required<'dashboard' | 'cultures' | 'graines' | 'recherche' | 'historique' | 'detail-plante'>();

  environment = input.required<{ urls: { dashboard: string, inprogress: string } }>();


  activatePage(page: 'dashboard' | 'cultures' | 'graines' | 'recherche' | 'historique' | 'detail-plante') {
    switch (page) {
      case 'dashboard':
        window.location.href = this.environment().urls.dashboard;
        break;
      case 'cultures':
        window.location.href = this.environment().urls.inprogress;
        break;
    }
  }

}
