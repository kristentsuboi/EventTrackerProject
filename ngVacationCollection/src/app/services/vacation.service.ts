import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacation } from '../models/vacation';

@Injectable({
  providedIn: 'root',
})
export class VacationService {
  url: string = environment.baseUrl + 'api/vacations';
  constructor(private http: HttpClient) {}

  index(): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('Error fetching vacation list');
        return throwError(
          () => new Error('VacationService.index(): error retrieving vacations')
        );
      })
    );
  }
  create(newVaca: Vacation): Observable<Vacation> {
    return this.http.post<Vacation>(this.url, newVaca).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () =>
            new Error('VacationService.create(): error creating Vacation' + err)
        );
      })
    );
  }
  update(vacation: Vacation) {
    return this.http.put<Vacation>(this.url + '/' + vacation.id, vacation).pipe(
      catchError((err: any) => {
        console.error('Error PUTing updated vacation');
        return throwError(
          () =>
            new Error('VacationService.update(): error updating Vacation' + err)
        );
      })
    );
  }
  destroy(vacaId: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + vacaId).pipe(
      catchError((err: any) => {
        console.error('Error DELETing vaca');
        return throwError(
          () => new Error('VacaService.destroy(): error deleting vaca' + err)
        );
      })
    );
  }
}
