import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';

import { InputRefDirective } from '../common/input-ref';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-au-fa-input',
  imports: [NgClass],
  templateUrl: './au-fa-input.html',
  styleUrl: './au-fa-input.scss',
})
export class AuFaInput implements AfterContentInit {
  @Input({ required: true })
  icon = '';

  @ContentChild(InputRefDirective)
  input: InputRefDirective | null = null;

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('the au-fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes(): object {
    const cssClasses: { [key: string]: boolean } = {};

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
