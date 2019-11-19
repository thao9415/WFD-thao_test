import {Component, OnInit} from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookList: Book[];

  constructor(private bookSevice: BookService) {
  }

  ngOnInit() {
    this.bookSevice.getBook().subscribe(next => {
      this.bookList = next;
      console.log(this.bookList);
    });
  }

}
