import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccidentDscriptionServiceService {

  constructor(private http: HttpClient) { }


  findByRelatedLabel(relatedLabel: string): Observable<any> {
    return this.http.get(`/findByRelatedLabel/${relatedLabel}`);
  }
}
