import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';
import { map,catchError,filter,distinct,debounceTime,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ex-alpha',
  templateUrl: './ex-alpha.component.html',
  styleUrls: ['./ex-alpha.component.scss']
})
export class ExAlphaComponent implements OnInit {


  latestSearch = new Subject<string>();

  searchLanguage:string ='javascript'
  searchTerm:string;

  results;

  constructor(private http:HttpClient) {
   }

  ngOnInit(): void {
    this.results = this.latestSearch.pipe(
      // TODO request github api
      switchMap(data => this.http.get(''))
    )
  }

  changeHandler(e){
    // TODO debounce it
    const value = e.target.value
    console.log(value);
    this.latestSearch.next(value) //emit every string input when
  }

}
