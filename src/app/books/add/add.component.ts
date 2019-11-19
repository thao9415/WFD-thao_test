import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  message = '';

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createBook(bookForm) {
    this.bookService.addBook(bookForm.value).subscribe(() => {
      this.message = 'Successfully';
    }, error => {
      this.message = 'Errors';
    });
  }

}
