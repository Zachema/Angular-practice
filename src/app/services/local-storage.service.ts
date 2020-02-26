import { Injectable } from '@angular/core';

const ls = localStorage;


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public set(key:string, value:any):void {
    if(!value && value=== undefined) return;
    const arr = JSON.stringify(value);
    ls.setItem(key, arr);
  }

  public get<T>(key:string){
    return JSON.parse(ls.getItem(key)) as T;
  }

  public getList<T>(key:string){
    return ls.getItem(key) ? JSON.parse(ls.getItem(key)) as T[] : [];
  }

}
