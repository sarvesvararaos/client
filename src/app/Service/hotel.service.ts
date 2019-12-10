import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HotelService {
  private _baseUrl: string = "http://localhost:8080/api/all-hotels-list";
  private _baseUrl1: string = "http://localhost:8080/api/findbyname";
  constructor(private _http: HttpClient) {}
  getHotels() {
    return this._http
      .get(this._baseUrl)
      .pipe(
        map(this.extractData),
        catchError(this.handleError<any>("Hotels  Not Found"))
      );
  }

  extractData(res: Response) {
    let body = res;
    console.log(body);
    return body || {};
  }
  getSearchByName(name: String) {
    return this._http
      .get(`${this._baseUrl1}/${name}`)
      .pipe(catchError(this.handleError));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
