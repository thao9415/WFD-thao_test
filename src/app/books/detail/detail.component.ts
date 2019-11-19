import { Component, OnInit } from '@angular/core';
import {Awesome} from '../../interface/awesome';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Awesome;
  subcription: Subscription;

  constructor() { }

  ngOnInit() {
  }

}
