import { AuFaInput, InputRefDirective } from '@au-fa-input';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App } from './app';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('App', () => {

  let component: App,
    fixture: ComponentFixture<App>,
    el: DebugElement,
    emailField: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, AuFaInput, InputRefDirective],
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(App);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    emailField = el.query(By.css('#email-field'));

    fixture.detectChanges();

  });


  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Font Awesome',
    );
  });

  it('should create a font awesome email input', async () => {
    expect(emailField).toBeTruthy();
  });

  it('should include the correct email icon inside the email input', async () => {
    expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
  });

  it('should have projected the correct test input inside the email field', async () => {
    expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
  });
});
