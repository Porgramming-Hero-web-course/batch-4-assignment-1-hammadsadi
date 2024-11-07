// Problem 7: Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car{
    // Properties
    make: string;
    model:string;
    year:number;
    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model= model;
        this.year = year
    }
    // Method
    getCarAge():number{
      return  new Date().getFullYear() - this.year
    }
}

