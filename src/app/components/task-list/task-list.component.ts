import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../data/models/TaskModel';
import { TaskGenericService } from '../../services/task-generic.service';
import { StatusTaskPipe } from "../../pipes/status-task.pipe";
import { PriorityTaskPipe } from "../../pipes/priority-task.pipe";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    imports: [CommonModule, StatusTaskPipe, PriorityTaskPipe,RouterLink,RouterOutlet]
})
export class TaskListComponent implements OnInit {
  tasks: TaskModel[] = [];

  constructor(private _taskgenericservice: TaskGenericService) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this._taskgenericservice.list().subscribe((listTask) => {
      this.tasks = listTask;
    });
  }

  StatusEdit(task: TaskModel) {
    task.statusTask = task.statusTask === 0 ? 1 : 0;
    this._taskgenericservice.state(task).subscribe(() => {
      alert('Actualizado');
    });
  }

  onCheckboxChange(task: TaskModel) {
    this.StatusEdit(task);
  }
  
}

