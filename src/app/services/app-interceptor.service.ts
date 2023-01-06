import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  constructor(private dataService : DataService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.dataService.showLoader(true)
    return next.handle(req).pipe(
      retry(2),
      finalize(() => this.dataService.showLoader(false))
    )
  }
}
