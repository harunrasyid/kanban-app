export enum State {
  Todo,
  Doing,
  Done,
}

export interface TaskType {
  id: number;
  title: string;
  state: State;
}
