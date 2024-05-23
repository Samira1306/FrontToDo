import { Routes } from '@angular/router';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskViewComponent } from '../components/task-view/task-view.component';

export const routes: Routes = [
  {
    path: '',
    component: TaskViewComponent,
  },
  {
    path: 'TaskList',
    component: TaskListComponent,
  },
  {
    path: 'create',
    component: TaskViewComponent,
  },
];
