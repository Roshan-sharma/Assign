import { Component, NgModule } from '@angular/core';
export type EditorType = 'dept' | 'stud';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'react';
  editor: EditorType = 'dept';
  data: any[];
  name;
  result;

  get showDept() {
    return this.editor === 'dept';
  }

  get showStud() {
    return this.editor === 'stud';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}