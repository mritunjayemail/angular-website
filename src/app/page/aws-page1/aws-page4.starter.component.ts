import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { } from 'jquery';
import { } from 'admin-lte';


@Component({
  selector: 'app-starter',
  templateUrl: './aws-page4.starter.component.html',
  styleUrls: ['./aws-page4.component.css']
})
export class AWSPage4StarterComponent implements OnInit, OnDestroy, AfterViewInit {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  adminLte: JQuery;

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.body.classList.add('sidebar-mini');

  }

  ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('sidebar-mini');
  }

}
