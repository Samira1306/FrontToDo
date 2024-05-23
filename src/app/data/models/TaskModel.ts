import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

export interface TaskModel {
    id?: string;  
    title: string;
    statusTask: number;
    detail: string;
    expirationDate: Date;
    priority: number;
  }
  export interface ITaskOpiModel{
    id?: string;
    userId: string;
    title: string;
    statusTask: Status;
    detail: string;
    priority: Priority;
    expirationDate:Date;
}