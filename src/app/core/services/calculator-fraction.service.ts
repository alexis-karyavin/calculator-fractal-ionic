import { Injectable } from '@angular/core';
import {FractionModel} from '../models/fraction.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorFractionService {

  constructor() {
    console.log('constrinct');
  }

  public sum(a: FractionModel, b: FractionModel): FractionModel {
    let res = new FractionModel();
    res.numerator = a.numerator * b.denominator + b.numerator * a.denominator;
    res.denominator = a.denominator * b.denominator;
    res = this.reduction(res);
    return res;
  }
  public diff(a: FractionModel, b: FractionModel): FractionModel {
    let res = new FractionModel();
    res.numerator = a.numerator * b.denominator - b.numerator * a.denominator;
    res.denominator = a.denominator * b.denominator;
    res = this.reduction(res);
    return res;
  }
  public multi(a: FractionModel, b: FractionModel): FractionModel {
    let res = new FractionModel();
    res.numerator = a.numerator * b.numerator;
    res.denominator = a.denominator * b.denominator;
    res = this.reduction(res);
    console.log(res);
    return res;
  }

  public div(a: FractionModel, b: FractionModel): FractionModel {
    let res = new FractionModel();
    res.numerator = a.numerator * b.denominator;
    res.denominator = a.denominator * b.numerator;
    res = this.reduction(res);
    return res;
  }
  private reduction(a: FractionModel): FractionModel {
    const m = a.numerator,
          n = a.denominator;
    let M = m,
        N = n;
    for (let i = 2; i <= Math.abs(m); i++) {
      if (m % i === 0 &&  n % i === 0) {
        M = m / i;
        N = n / i;
      }
    }
    return new FractionModel(M, N);
  }
}
