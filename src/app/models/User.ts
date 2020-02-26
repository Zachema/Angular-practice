import { generateUUID } from '../helper/uuid';

export class User {
  _id:string;
  constructor(public name:string, public email?:string){
    this._id = generateUUID();
  }
}
