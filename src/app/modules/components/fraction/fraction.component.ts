import {Component, Input, OnInit} from '@angular/core';
import {FractionModel} from '../../../core/models/fraction.model';

@Component({
  selector: 'app-fraction',
  templateUrl: './fraction.component.html',
  styleUrls: ['./fraction.component.scss'],
})
export class FractionComponent implements OnInit {
  @Input() frac: FractionModel;
  constructor() { }

  ngOnInit() {}

}
