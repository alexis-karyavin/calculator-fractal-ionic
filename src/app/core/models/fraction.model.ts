export class FractionModel {
  public numerator: number;
  public denominator: number;
  public sign: number;
  constructor(numerator = 0, denominator = 0) {
    this.numerator = numerator;
    this.denominator = denominator;
    this.setSign();
  }
  private setSign(): void {
    if (this.numerator * this.denominator < 0) {
      this.sign = -1;
    } else {
      this.sign = 1;
    }
    this.numerator = Math.abs(this.numerator);
    this.denominator = Math.abs(this.denominator);
  }
  public toDecimal() {
    return this.numerator / this.denominator * this.sign;
  }
}
