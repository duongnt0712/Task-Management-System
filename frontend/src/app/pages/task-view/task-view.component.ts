import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  checked = true;

  constructor() { }

  ngOnInit() {

  }

  listOfData = [
    {
      key: '1',
      title: 'Task 1',
      description: 'Description 1',
      dueDate: '16/06/2024',
      status: 'Completed'
    },
    {
      key: '2',
      title: 'Task 2',
      description: 'Description 2',
      dueDate: '16/06/2024',
      status: 'Completed'
    },
    {
      key: '3',
      title: 'Task 3',
      description: 'Description 3',
      dueDate: '16/06/2024',
      status: 'Pending'
    },
  ];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  }

}
