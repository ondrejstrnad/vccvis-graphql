export class Publication {
    public _id?: string;
    public title?: string;
    public year?: number;
    public authors?: string;
    public num?: number;
    
    constructor(payload: Partial<Publication>) {
    
    }
  }