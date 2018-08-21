import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {Router} from '@angular/router';
import {ProfileService} from '../demo/profile.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor( ) { }
  ngOnInit() {
  }
}
