import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Silabo } from '../models/silabo';

@Injectable({
  providedIn: 'root',
})
export class SilaboService {
  private urlApi: string = `${environment.api.baseUrl}`;

  constructor(private http: HttpClient) {}

  saveSilabo(silabo: Silabo) {
    return this.http
      .post(`${this.urlApi}/silabo`, silabo)
      .pipe(catchError(this.handleError));
  }

  listById(id: number) {
    return this.http
      .get(`${this.urlApi}/silabo/${id}`)
      .pipe(catchError(this.handleError));
  }

  downloadSilabo(id: number) {
    return this.http.post(
      `${this.urlApi}/silabo/pdf`,
      { silabo_id: id },
      { responseType: 'blob' }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Client error', error.error.message);
    } else {
      // Error en el lado del servidor
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    //catch and rethrow
    return throwError('Cannot perform the request, please try again later');
  }
}
