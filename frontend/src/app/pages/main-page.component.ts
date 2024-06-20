import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from '../core/model/list.model';
import { TaskService } from '../core/services/task/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../core/model/task.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  lists!: List[];

  selectedListId!: string;
  listId!: string;

  ngOnInit(): void {
    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    })
  }

  isCollapsed = false;
  title = "";
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  toggleMenu(isCollapse: boolean) {
    this.isCollapsed = isCollapse;
  }

  createList(title: string) {
    console.log(title)
    this.taskService.createList(title).subscribe((list: List) => {
      console.log(list);
      // TODO: Why not navigate?
      this.router.navigate([ '/task-management/lists', {listId: list._id} ]);
    });
  }

  updateList(title: string) {
    this.taskService.updateList(this.listId, title).subscribe(() => {
      this.router.navigate(['/task-management/lists', this.listId]);
    })
  }

}
