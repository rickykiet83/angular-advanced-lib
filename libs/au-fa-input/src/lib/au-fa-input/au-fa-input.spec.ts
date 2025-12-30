import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuFaInput } from './au-fa-input';

describe('AuFaInput', () => {
  let component: AuFaInput;
  let fixture: ComponentFixture<AuFaInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuFaInput],
    }).compileComponents();

    fixture = TestBed.createComponent(AuFaInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
