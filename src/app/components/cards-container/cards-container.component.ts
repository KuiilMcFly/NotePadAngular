
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  @ViewChild(ModalDialogComponent) modaleDialogComponent! : ModalDialogComponent;
  
  notes = [
    { title: 'Note 1', content: 'Content 1' },
    { title: 'Note 2', content: 'Content 2' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    for (let i = 0; i < this.notes.length; i++) {
      const data = JSON.parse(localStorage.getItem('list_' + i));
      if (data !== null) {
        this.notes[i].title = data.title;
        this.notes[i].content = data.content;
      }
    }
  }

  saveNote(index: number): void {
    const item_key = 'list_' + index;
    const data = {
      title: this.notes[index].title,
      content: this.notes[index].content
    };
    localStorage.setItem(item_key, JSON.stringify(data));
  }

  OpenModal() {
    console.log('Modale aperto');
    this.modaleDialogComponent.mostraModale = true;
  }
}
