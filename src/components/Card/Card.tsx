import styles from "./style.module.css";
import { TaskType } from "../../types/Types.ts";
import { stateTitle } from "../../utils/column-utils.ts";
import { useStore } from "../../store/store.ts";
interface Props {
  task: TaskType;
}

export const Card = ({ task }: Props) => {
  const deleteTask = useStore((store) => store.deleteTask);

  return (
    <div className={styles.card}>
      <div>{task.title}</div>
      <div className={styles.bottomContainer}>
        <button
          className={styles.deleteButton}
          onClick={() => deleteTask(task)}
        >
          Delete
        </button>
        <div></div>
        <div className={styles.statusContainer}>{stateTitle(task.state)}</div>
      </div>
    </div>
  );
};
