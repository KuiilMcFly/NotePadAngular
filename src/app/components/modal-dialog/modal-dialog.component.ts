import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  mostraModale = false;

  CloseModal() {
    this.mostraModale = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
