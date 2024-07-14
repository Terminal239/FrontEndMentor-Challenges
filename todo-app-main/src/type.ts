export enum Filter {
  "All" = "All",
  "Active" = "Active",
  "Completed" = "Completed",
}

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}
