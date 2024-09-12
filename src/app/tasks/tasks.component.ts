import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string
  @Input({required: true}) name?: string
  isAddingTask = false;

  

  get selectedUserTasks() {
    return
  }

  onCompleteTask(id: string){
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: newTaskData){
    
    this.isAddingTask = false;
  }
}
