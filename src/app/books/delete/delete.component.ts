import {Component, OnInit} from '@angular/core';
import {Awesome} from '../../interface/awesome';
import {Subscription} from 'rxjs';
import {AwesomeService} from '../../services/awesome.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book: Awesome;
  subcription: Subscription;
  message: string;

  constructor(private bookService: AwesomeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subcription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.bookDetail(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.message = 'can not retrieve customer detail. ' + error;
      });
    });
  }

  delete() {
    console.log(this.book.id);
    this.bookService.deleteBook(this.book.id).subscribe(next => {
      this.message = 'Successfully';
    }, error => {
      this.message = 'Errors';
    });
  }
}
