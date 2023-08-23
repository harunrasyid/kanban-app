import { create } from "zustand";
import { TaskType } from "../types/Types.ts";

export interface StateType {
  tasks: TaskType[];
  addTasks(data: TaskType): void;
  deleteTask(data: TaskType): void;
  draggedTask: TaskType | undefined;
  setDraggedTask(data: TaskType | undefined): void;
  moveTask(data: TaskType): void;
}

const store = (set): StateType => ({
  tasks: [],
  addTasks: (data: TaskType) =>
    set((state: StateType) => ({ tasks: [...state.tasks, data] })),
  deleteTask: (data: TaskType) =>
    set((state: StateType) => ({
      tasks: state.tasks.filter((task) => task.id !== data.id),
    })),
  draggedTask: undefined,
  setDraggedTask: (data: TaskType | undefined) => set({ draggedTask: data }),
  moveTask: (data: TaskType) =>
    set((state: StateType) => ({
      tasks: state.tasks.map((task) => (task.id === data.id ? data : task)),
    })),
});

export const useStore = create(store);
