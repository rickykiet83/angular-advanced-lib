import { Component, Input } from '@angular/core';

import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-au-fa-input',
  imports: [NgClass],
  templateUrl: './au-fa-input.html',
  styleUrl: './au-fa-input.scss',
})
export class AuFaInput {
  @Input({required: true})
  icon: string = '';

  get classes(): any {
    const cssClasses: { [key: string]: boolean } = {};

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
