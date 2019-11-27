import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { CloseDialogDirective } from './directives/close-dialog.directive';



@NgModule({
  declarations: [DialogComponent, CloseDialogDirective],
  imports: [
    CommonModule
  ],
  exports: [DialogComponent, CloseDialogDirective]
})
export class DialogModule {}
