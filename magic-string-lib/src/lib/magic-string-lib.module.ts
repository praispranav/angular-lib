import { NgModule } from '@angular/core';
import { MagicStringLibComponent } from './magic-string-lib.component';

import { MagicStringModule } from "magic-string"

@NgModule({
  declarations: [
    MagicStringLibComponent
  ],
  imports: [
    MagicStringModule
  ],
  exports: [
    MagicStringLibComponent
  ]
})
export class MagicStringLibModule { }
