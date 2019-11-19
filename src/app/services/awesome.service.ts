import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from '../interface/awesome';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  private readonly API_URL = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getBook(count = 10): Observable<Awesome[]> {
    return this.http.get<Awesome[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
    // return this.http.get<Book[]>('http://localhost:3000/awesomes');
  }

  bookDetail(id: string): Observable<Awesome> {
    return this.http.get<Awesome>(`http://localhost:3000/awesomes/${id}`);
  }


  addBook(book: Partial<Awesome>): Observable<Awesome> {
    // return this.http.post<Book>('http://localhost:3000/books', book);
    return this.http.post<Awesome>(this.API_URL, book);
  }

  editBook(id: number, book: Awesome): Observable<Awesome> {
    // return this.http.put<Book>(`http://localhost:3000/books/${id}`, book);
    return this.http.put<Awesome>(`${this.API_URL}/${id}`, book);
  }

  deleteBook(id: number): Observable<Awesome> {
    return this.http.delete<Awesome>(`${this.API_URL}/${id}`);
    // return this.http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
}
