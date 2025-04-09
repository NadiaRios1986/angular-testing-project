import { Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  imports:[FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class eliminar{

  title= 'EVALUACION';


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
