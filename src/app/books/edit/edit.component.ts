import {Component, OnInit} from '@angular/core';
import {Awesome} from '../../interface/awesome';
import {Subscription} from 'rxjs';
import {AwesomeService} from '../../services/awesome.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book: Awesome;
  subscription: Subscription;
  message: string;

  constructor(private bookService: AwesomeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.bookDetail(id).subscribe(next => {
        this.book = next;
        console.log(this.book);
      }, error => {
        console.log(error);
      });
    });
  }

  edit(bookForm) {
    this.bookService.editBook(this.book.id, bookForm.value).subscribe(next => {
      this.message = 'Successfully';
    }, error => {
      this.message = 'Error!';
    });
  }
}
