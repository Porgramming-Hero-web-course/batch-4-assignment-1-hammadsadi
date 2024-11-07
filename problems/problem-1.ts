// Problem 1:  Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const sumArray =(numberList:number[]): number=>{
    return numberList.reduce((prev:number, curr:number)=> prev + curr,0)
}