import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { conection } from '../conection/conection';
import { ITaskOpiModel, TaskModel } from '../data/models/TaskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskGenericService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private http = inject(HttpClient);
  private url = conection.conect + 'TaskManager';
  constructor() {}
  list(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.url);
  }
  create(task: TaskModel): Observable<ITaskOpiModel> {
    return this.http.post<ITaskOpiModel>(this.url, task, this.httpOptions);
  }
  state(task: TaskModel):Observable<ITaskOpiModel>{
    return this.http.put<ITaskOpiModel>(this.url,task);
  }
}
