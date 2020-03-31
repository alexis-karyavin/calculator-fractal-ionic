import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FractionComponent } from './fraction.component';

describe('FractionComponent', () => {
  let component: FractionComponent;
  let fixture: ComponentFixture<FractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
