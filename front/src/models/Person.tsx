import { Publication } from "./Publication";

export class Person {
    public _id?: string;
    public firstname?: string;
    public lastname?: string;
    public secret: string;
    public fullname: string;
    public position: string;   
    public publications?: Publication[];
  
    constructor(payload: Partial<Person>) {
      this.fullname = payload.fullname || '';
      this.position = payload.position || '';
      this.secret = payload.secret || '';     
    }
  }