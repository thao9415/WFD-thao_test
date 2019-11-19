import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book;
  subcription: Subscription;

  constructor() { }

  ngOnInit() {
  }

}
