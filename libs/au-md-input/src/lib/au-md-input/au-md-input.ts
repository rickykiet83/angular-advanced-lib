import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { InputRefDirective } from '@lib-common';

@Component({
  selector: 'lib-au-md-input',
  imports: [CommonModule],
  templateUrl: './au-md-input.html',
  styleUrl: './au-md-input.scss',
})
export class AuMdInput implements AfterContentInit {

  @Input()
  icon = '';

  @ContentChild(InputRefDirective)
  input: InputRefDirective | null = null;

  ngAfterContentInit() {
    if (!this.input) {
      console.error("the au-md-input needs an input inside its content");
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }
}
