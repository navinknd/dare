import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DareListService {


  api_url: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;

  }

  getSelectedDatas: Subject<any> = new Subject();
  getSelectedDatas$ = this.getSelectedDatas.asObservable();

  getDareList(): Observable<any> {
    return this.http.get<any>(`${this.api_url}post`).pipe(map((res: any) => res));
  }

  sendSelectedlist(selectedList: any) {
    this.getSelectedDatas.next(selectedList)

    localStorage.setItem('question', JSON.stringify(selectedList));
  }
  receiveSelectedlist() {
    return JSON.parse(localStorage.getItem('question') || '{}')
  }
}