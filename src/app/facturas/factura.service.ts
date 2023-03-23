import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";

import { IFac} from "./factura";

import { IDet, RESPUESTA} from "./detalle";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  public facturaUrl = 'api/products/facturas.json';
  //public detalleUrl = 'api/products/detalles.json';
  
  //private productUrl = 'https://api.cafebritt.com/develop/test/functions/api.cfc?method=BuscarProducto&token=1234508123';

  public detalleUrl= 'https://api.cafebritt.com/develop/test/functions/api.cfc?method=ObtieneFactura&token=1234508123&numero_factura=103';

  rutaApi = "https://api.cafebritt.com/develop/test/functions/api.cfc?";


  constructor(private http: HttpClient) { }

  obtenerFactura(numero: string | number) {
    return this.http.get(`${this.rutaApi}/?method=ObtieneFactura&token=1234508123&numero_factura=${numero}`);
  }

  
  registrarDetalle(detalle: IDet) {
    return this.http.post(`${this.rutaApi}?method=AgregaDetalle&token=1234508123`, detalle);
  }

  registrarFactura(factura: IFac) {
    return this.http.post(`${this.rutaApi}/?method=AgregaDetalle&token=1234508123`, factura);
  }


  eliminarDetalle(linea: string | number, numerofactura: string | number) {
    return this.http.delete(`${this.rutaApi}?method=BorrarDetalle&token=1234508123?id=${linea}&numero_factura=${numerofactura}`);
  }


  getFacturas(): Observable<IFac[]> {
    return this.http.get<IFac[]>(this.facturaUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }





  getDetalles(): Observable<RESPUESTA> {
    return this.http.get<RESPUESTA>(this.detalleUrl).pipe(
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
