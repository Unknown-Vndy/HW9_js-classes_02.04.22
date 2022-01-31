'use strict';

class MyArray {
   constructor(){
      this.length = 0;
      for(let i = 0; i < arguments.length; i++) {
         this[i] = arguments[i];
      }
      this.length = arguments.length;
   }
   push (...items) {
      const amountOfpreviousValues = this.length;
      this.length += arguments.length;
      for (let i = amountOfpreviousValues; i < amountOfpreviousValues + arguments.length; i++){
         this[i] = arguments[i - amountOfpreviousValues];
      }
   } 
}

const arr = new MyArray(1, 2, 3, 4);

arr.push(1,2,3,4,5,6)
console.log(arr);



class RangeValidator {
   constructor(from, to) {
      this.from = from;
      this.to = to;
   }
   set from(value) {
      if (typeof value !== 'number') {
         throw new TypeError('inccorect data type, number expect')
      }
      // if (value > to) { // как обратиться к to?
      //    throw new RangeError('from has to be less than to');
      // }
      this._from = value
   }
   get from() {
      return this._from;
   }
   set to(value) {
      if (typeof value !== 'number') {
         throw new TypeError('inccorect data type, number expect')
      }
      // if (value < from) { // как обратиться к from?
      //    throw new RangeError('to has to be higher than from')
      // }
      this._to = value;
   }
   get to() {
      return this._to;
   }
   get range() {
      return [this.from, this.to];
   }
   validate(number) {
      return number >= this.from && number <= this.to;
   }
}
const range1 = new RangeValidator(6, 5.5);


console.log(range1.range);

console.log(range1.validate(2));
console.log();



