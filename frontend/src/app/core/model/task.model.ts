export interface Task {
  _id: string;
  _listId: string;
  title: string;
  description: string;
  dueDate: string;
  status: boolean;
}
