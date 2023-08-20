import styles from "./style.module.css";
import { TaskType } from "../../types/Types.ts";
import { stateTitle } from "../../utils/column-utils.ts";
interface Props {
  task: TaskType;
}

export const Card = ({ task }: Props) => {
  return (
    <div className={styles.card}>
      <div>{task.title}</div>
      <div className={styles.bottomContainer}>
        <div></div>
        <div className={styles.statusContainer}>{stateTitle(task.state)}</div>
      </div>
    </div>
  );
};
