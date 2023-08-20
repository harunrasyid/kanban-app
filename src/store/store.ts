import { create } from "zustand";
import { State, TaskType } from "../types/Types.ts";

export interface StateType {
  tasks: TaskType[];
  addTasks(data: TaskType): void;
}

const DUMMY_INITIAL_TASK: TaskType[] = [
  { title: "Test Task", state: State.Todo },
  { title: "Test Task", state: State.Doing },
  { title: "Test Task 2", state: State.Doing },
  { title: "Test Task", state: State.Done },
];

const store = (set): StateType => ({
  tasks: DUMMY_INITIAL_TASK,
  addTasks: (data: TaskType) =>
    set((state: StateType) => ({ tasks: [...state.tasks, data] })),
});

export const useStore = create(store);
