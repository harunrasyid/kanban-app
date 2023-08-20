export enum State {
  Todo,
  Doing,
  Done,
}

export interface TaskType {
  title: string;
  state: State;
}
