import { AuFaInput } from '@au-fa-input';
import { AuMdInput } from '@au-md-input';
import { Component } from '@angular/core';
import { InputRefDirective } from '@lib-common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, AuFaInput, InputRefDirective, AuMdInput],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'au-input';
}
