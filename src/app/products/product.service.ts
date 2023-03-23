import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";

import { IProduct, Respuesta } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // public productUrl = 'api/products/products.json';
  
  private productUrl = 'https://api.cafebritt.com/develop/test/functions/api.cfc?method=BuscarProducto&token=1234508123';


  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.productUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
