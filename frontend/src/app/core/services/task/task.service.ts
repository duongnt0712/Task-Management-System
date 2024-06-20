import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';
import { Task } from '../../model/task.model';
import { Observable } from 'rxjs';
import { List } from '../../model/list.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getLists(): Observable<List[]> {
    return this.webReqService.get<List[]>('lists');
  }

  getList(id: string): Observable<List> {
    return this.webReqService.get<List>(`lists/${id}`);
  }

  createList(title: string): Observable<List> {
    // We want to send a web request to create a list
    return this.webReqService.post<List>('lists', { title });
  }

  updateList(id: string, title: string): Observable<List> {
    // We want to send a web request to update a list
    return this.webReqService.patch<List>(`lists/${id}`, { title });
  }

  deleteList(id: string): Observable<List> {
    return this.webReqService.delete<List>(`lists/${id}`);
  }

  getTasks(listId: string): Observable<Task[]> {
    return this.webReqService.get<Task[]>(`lists/${listId}/tasks`);
  }

  createTask(task: Task, listId: string): Observable<Task> {
    // We want to send a web request to create a task
    return this.webReqService.post<Task>(`lists/${listId}/tasks`, task);
  }

  updateTask(listId: string, taskId: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.status
    });
  }
}
