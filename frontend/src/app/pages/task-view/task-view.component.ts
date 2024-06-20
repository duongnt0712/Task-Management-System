import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/core/model/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  isVisibleNewTask = false;
  isVisibleEditList = false;
  isVisibleEditTask = false;
  validateEditTaskForm!: FormGroup;
  selectedListId!: string
  tasks!: Task[];

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  checked = true;

  constructor(private fb: FormBuilder, private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.validateEditTaskForm = this.fb.group({
      title: [null, [Validators.required ]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
    });

    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.selectedListId = params.listId;
          this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
          })
        } else {
          this.tasks = [];
        }
      }
    )
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

  cancelEditTask(): void {
    this.isVisibleEditTask = false;
  }

  editList() {

  }

  submitFormEditTask() {
    if (this.validateEditTaskForm.valid) {
      console.log('submit', this.validateEditTaskForm.value);
    } else {
      Object.values(this.validateEditTaskForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
