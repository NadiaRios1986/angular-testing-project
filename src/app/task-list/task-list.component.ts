import { Component } from '@angular/core';
import { eliminar } from '../eliminar/eliminar.component';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  imports:[FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  title= 'EVALUACION';

  isvisible:boolean=true;


  toggle(): void{
    this.isvisible=!this,this.isvisible;
  }


  tasks: string[] = [];

  constructor() {
    console.log('TaskListComponent initialized');
  }

  addTask(task: string) {
    console.log('Adding task:', task);
  }

  music: string[]=['luna','love','black is black', 'sombras']
  nuevo: string=""

  addItem() :void {
    this.music.push (this.nuevo);
    this.nuevo='';
  }

  updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    console.log('Deleting task:', task);
  }
}
