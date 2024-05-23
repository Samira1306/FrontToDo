import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { PriorityTaskPipe } from './pipes/priority-task.pipe';
import { StatusTaskPipe } from './pipes/status-task.pipe';
import { routes } from './infrastructure/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    TaskViewComponent,
    TaskListComponent,
    HttpClientModule,
    StatusTaskPipe,
    PriorityTaskPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TaskManagerFront';
}
