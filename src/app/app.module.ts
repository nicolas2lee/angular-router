import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {RoutingModule} from "./app.routing";
import { SidebarBodyComponent } from './layout/sidebar/sidebar-body/sidebar-body.component';
import { SidebarBodyEntrypointComponent } from './layout/sidebar/sidebar-body-entrypoint/sidebar-body-entrypoint.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    SidebarComponent,
    SidebarBodyComponent,
    SidebarBodyEntrypointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
