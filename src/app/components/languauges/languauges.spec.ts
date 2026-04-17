import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Languauges } from './languauges';

describe('Languauges', () => {
  let component: Languauges;
  let fixture: ComponentFixture<Languauges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Languauges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Languauges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
