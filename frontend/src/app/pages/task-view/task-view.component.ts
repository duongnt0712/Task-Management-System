import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/core/model/task.model';
import { List } from 'src/app/core/model/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  isVisibleNewTask = false;
  isVisibleEditList = false;
  isVisibleEditTask = false;
  validateCreateTaskForm!: FormGroup;
  validateEditTaskForm!: FormGroup;
  listId!: string
  tasks!: Task[];
  list!: List;

  constructor(private fb: FormBuilder, private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.listId = params.listId;
          this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
          })
        } else {
          this.tasks = [];
        }
      }
    )

    this.taskService.getList(this.listId).subscribe((list: List) => {
      this.list = list;
    })

    this.validateCreateTaskForm = this.fb.group({
      title: [null, [Validators.required ]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  openNewTask(): void {
    this.isVisibleEditTask = true;
  }

  openEditList(): void {
    this.isVisibleEditList = true;
  }

  cancelEditList(): void {
    this.isVisibleEditList = false;
  }

  openEditTask(): void {
    this.isVisibleEditTask = true;
  }

  cancelCreateTask(): void {
    this.isVisibleEditTask = false;
  }

  editList() {

  }

  submitFormCreateTask() {
    if (this.validateCreateTaskForm.valid) {
      const createInfo = {
        ...this.validateCreateTaskForm.value,
      }
      this.createTask(createInfo);
    } else {
      Object.values(this.validateCreateTaskForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createTask(task: Task) {
    this.taskService.createTask(task, this.listId).subscribe((newTask: Task) => {
      console.log(newTask);
      this.router.navigate([this.router.url]);
    })
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(this.listId, id).subscribe((res: any) => {
      this.tasks = this.tasks.filter(val => val._id !== id);
      console.log(res);
    })
  }

}
