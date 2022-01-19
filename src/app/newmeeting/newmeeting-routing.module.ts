import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmeetingPage } from './newmeeting.page';

const routes: Routes = [
  {
    path: '',
    component: NewmeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmeetingPageRoutingModule {}
