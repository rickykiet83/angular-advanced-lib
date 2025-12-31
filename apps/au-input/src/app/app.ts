import { AuFaInput, InputRefDirective } from '@au-fa-input';
import { AuMdInput, InputRefDirective as InputRefMDDirective } from '@au-md-input';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, AuFaInput, InputRefDirective, InputRefMDDirective, AuMdInput],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'au-input';
}
