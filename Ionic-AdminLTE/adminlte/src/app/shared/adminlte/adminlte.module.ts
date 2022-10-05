import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { RouterModule } from '@angular/router';

const components=[
  PreloaderComponent,
  MainHeaderComponent,
  MainSidebarComponent,
  MainFooterComponent
]

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports:[components]
})
export class AdminlteModule { }
