import {Component, OnInit} from '@angular/core';
import {CalculatorFractionService} from '../../core/services/calculator-fraction.service';
import {FractionModel} from '../../core/models/fraction.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public frac1: FractionModel;
  public frac2: FractionModel;
  public fracRes: FractionModel;
  public decimalFrac: number;
  constructor(public calculatorFractionService: CalculatorFractionService) {
    this.frac1 = new FractionModel();
    this.frac2 = new FractionModel();
    this.fracRes = new FractionModel();
  }
  public sum(a: FractionModel, b: FractionModel): void {
    this.fracRes = this.calculatorFractionService.sum(a, b);
  }
  public diff(a: FractionModel, b: FractionModel): void {
    this.fracRes = this.calculatorFractionService.diff(a, b);
  }
  public multi(a: FractionModel, b: FractionModel): void {
    this.fracRes = this.calculatorFractionService.multi(a, b);
  }
  public div(a: FractionModel, b: FractionModel): void {
    this.fracRes = this.calculatorFractionService.div(a, b);
  }
  public showDecimalFrac(): void {
    this.decimalFrac = this.fracRes.toDecimal();
  }

}
