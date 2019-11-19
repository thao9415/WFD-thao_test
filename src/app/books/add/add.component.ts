import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../../services/awesome.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  message = '';

  constructor(private bookService: AwesomeService) {
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
