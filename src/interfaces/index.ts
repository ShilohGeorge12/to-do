export interface NewTodo {
  title: string;
  description: string;
}
export interface UpdateTodo {
  title?: string;
  description?: string;
  isCompleted?: boolean;
}
