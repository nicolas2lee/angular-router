import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-body',
  templateUrl: './sidebar-body.component.html',
  styleUrls: ['./sidebar-body.component.css']
})
export class SidebarBodyComponent implements OnInit {

  label: string;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.label = this.route.snapshot.paramMap.get('label');
    console.log(this.label)
  }

}
