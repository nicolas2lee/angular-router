import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sidebar-body-entrypoint',
  templateUrl: './sidebar-body-entrypoint.component.html',
  styleUrls: ['./sidebar-body-entrypoint.component.css']
})
export class SidebarBodyEntrypointComponent implements OnInit {

  constructor( private router: Router,
               private route: ActivatedRoute) { }


  isDataLoaded : boolean = false;

  ngOnInit() {
    this.isDataLoaded = false;
    let label = this.route.snapshot.paramMap.get('label');
    let url = this.route.snapshot.url;
     console.log(this.route);
    console.log(label);
    console.log(url)
    //this.router.navigate()
    this.isDataLoaded = true;
    //this.router.navigateByUrl('/root/(dashboard:dashboard//sidebar:dashboard/(sidebar:entrypoint/'+label+'/(sidebar:body/'+label+')))');
    this.router.navigateByUrl('/root/(dashboard:dashboard//sidebar:dashboard/(sidebar:body/'+label);
    //this.router.navigate([url, {outlets: { 'sidebar': ['body', label]}}])
  }

}
