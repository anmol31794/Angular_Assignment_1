import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, catchError, Observable, throwError, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  isLoading = new BehaviorSubject<boolean>(true)

  constructor(private http : HttpClient) { }

  getUsers() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(catchError(this.handleError))
  }

  handleError() : Observable<object> {
    return throwError(() => new Error('Something went wrong!'))
  }

  showLoader(show : boolean) {
    this.isLoading.next(show)
  }

}
