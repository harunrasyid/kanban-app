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

  return (
    <div className={styles.column}>
      <p>{stateTitle(state)}</p>
      {tasks.map((task) => {
        return <Card task={task} />;
      })}
    </div>
  );
};
