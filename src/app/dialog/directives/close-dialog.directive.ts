import { Directive, HostListener } from '@angular/core';
import { DialogService } from '../services';

@Directive({
  selector: '[appCloseDialog]'
})
export class CloseDialogDirective {

  constructor(private dialogService: DialogService) { }

  @HostListener('click', ['$event'])
  handleClose(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    this.dialogService.close();
  }
}
