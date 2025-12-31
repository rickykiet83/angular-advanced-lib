import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuMdInput } from './au-md-input';

describe('AuMdInput', () => {
  let component: AuMdInput;
  let fixture: ComponentFixture<AuMdInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuMdInput],
    }).compileComponents();

    fixture = TestBed.createComponent(AuMdInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
