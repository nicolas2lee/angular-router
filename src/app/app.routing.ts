import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout/layout.component";
import {DashboardComponent} from "./layout/dashboard/dashboard.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {SidebarBodyComponent} from "./layout/sidebar/sidebar-body/sidebar-body.component";
import {SidebarBodyEntrypointComponent} from "./layout/sidebar/sidebar-body-entrypoint/sidebar-body-entrypoint.component";

/*const appRoutes: Routes = [
  { path: 'root', component: LayoutComponent, children: [
    {path: 'dashboard', component: DashboardComponent, outlet: 'dashboard'},
    {path: 'dashboard', component: SidebarComponent, outlet: 'sidebar',children:[
      {path: 'entrypoint/:label', component: SidebarBodyEntrypointComponent, outlet: 'sidebar', children:[
        {path: 'body/:label', component: SidebarBodyComponent, outlet: 'sidebar'}
      ]}

    ]}
  ]}
];*/

const appRoutes: Routes = [
  { path: 'root', component: LayoutComponent, children: [
    {path: 'dashboard', component: DashboardComponent, outlet: 'dashboard'},
    {path: 'dashboard', component: SidebarComponent, outlet: 'sidebar',children:[
      {path: 'entrypoint/:label', component: SidebarBodyEntrypointComponent, outlet: 'sidebar', children:[
        // {path: 'body/:label', component: SidebarBodyComponent, outlet: 'sidebar'}
      ]},
      {path: 'body/:label', component: SidebarBodyComponent, outlet: 'sidebar'}

    ]}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
