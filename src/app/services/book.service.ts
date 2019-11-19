import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../interface/book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/awesomes';
  constructor(private http: HttpClient) {
  }

  getBook(count = 10): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
    // return this.http.get<Book[]>('http://localhost:3000/awesomes');
  }

  bookDetail(id: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/awesomes/${id}`);
  }


  addBook(book: Partial<Book>): Observable<Book> {
    // return this.http.post<Book>('http://localhost:3000/books', book);
    return this.http.post<Book>(this.API_URL, book);
  }

  editBook(id:number, book: Partial<Book>): Observable<Book> {
    // return this.http.put<Book>(`http://localhost:3000/books/${id}`, book);
    return this.http.put<Book>(`${this.API_URL}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.API_URL}/${id}`);
    // return this.http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_URL}/${book.id}`, book);
  }
}
