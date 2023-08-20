import styles from "./style.module.css";
import { Card } from "../Card/Card.tsx";
import { State, TaskType } from "../../types/Types.ts";
import { stateTitle } from "../../utils/column-utils.ts";
import { useStore } from "../../store/store.ts";
import { shallow } from "zustand/shallow";

interface Props {
  state: State;
}

export const Column = ({ state }: Props) => {
  const tasks: TaskType[] = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow,
  );
  const addTasks = useStore((store) => store.addTasks);

  const handleClickAddTask = () => {
    // TODO: change when the new task form ready to use
    addTasks({ title: "New Task", state });
  };

  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <p>{stateTitle(state)}</p>
        <button className={styles.addButton} onClick={handleClickAddTask}>
          Add
        </button>
      </div>
      {tasks.map((task, index) => {
        return <Card task={task} key={index.toString() + task.title} />;
      })}
    </div>
  );
};
