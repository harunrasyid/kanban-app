import { create } from "zustand";
import { State, TaskType } from "../types/Types.ts";

export interface StateType {
  tasks: TaskType[];
}

const store = (): StateType => ({
  tasks: [{ title: "Test Task", state: State.Todo }],
});

export const useStore = create(store);
