import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-gas-help-dlg',
  templateUrl: './gas-help-dlg.component.html',
  styleUrls: ['./gas-help-dlg.component.css']
})
export class GasHelpDlgComponent implements OnInit, IModalDialog {
  closeSubj: Subject<any>;

  constructor(modalService: ModalDialogService, viewRef: ViewContainerRef) { }

  ngOnInit() {
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    this.closeSubj = options.closeDialogSubject;
  }

  close() {
    this.closeSubj.next();
  }

}
