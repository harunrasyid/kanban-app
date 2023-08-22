import { create } from "zustand";
import { TaskType } from "../types/Types.ts";

export interface StateType {
  tasks: TaskType[];
  addTasks(data: TaskType): void;
  deleteTask(data: TaskType): void;
}

const store = (set): StateType => ({
  tasks: [],
  addTasks: (data: TaskType) =>
    set((state: StateType) => ({ tasks: [...state.tasks, data] })),
  deleteTask: (data: TaskType) =>
    set((state: StateType) => ({
      tasks: state.tasks.filter((task) => task.title !== data.title),
    })),
});

export const useStore = create(store);
