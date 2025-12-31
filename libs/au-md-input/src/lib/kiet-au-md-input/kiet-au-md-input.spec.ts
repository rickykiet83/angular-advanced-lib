import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KietAuMdInput } from './kiet-au-md-input';

describe('KietAuMdInput', () => {
  let component: KietAuMdInput;
  let fixture: ComponentFixture<KietAuMdInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KietAuMdInput],
    }).compileComponents();

    fixture = TestBed.createComponent(KietAuMdInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
