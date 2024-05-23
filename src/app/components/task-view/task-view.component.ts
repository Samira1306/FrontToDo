import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskGenericService } from '../../services/task-generic.service';

@Component({
  selector: 'app-task-view',
  standalone: true,
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterOutlet],
})
export class TaskViewComponent {
  taskForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private taskGenericService: TaskGenericService
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      statusTask: ['', Validators.required],
      detail: ['', Validators.required],
      expirationDate: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  TaskNew(taskForm: any): void {
    console.log('Formulario enviado:', taskForm);
    const formattedTask = {
      ...taskForm,
      priority: parseInt(taskForm.priority),
      statusTask: 0,
      expirationDate: new Date(taskForm.expirationDate).toISOString(),
    };

    this.taskGenericService.create(formattedTask).subscribe((data) => {
      alert('Exitoso');
    });
  }

  onSubmit() {
    this.TaskNew(this.taskForm.value);
  }
}
