import styles from "./style.module.css";
import { Card } from "../Card/Card.tsx";
import { State, TaskType } from "../../types/Types.ts";
import { stateTitle } from "../../utils/column-utils.ts";
import { useStore } from "../../store/store.ts";
import { shallow } from "zustand/shallow";
import useAddModal from "../../hooks/useAddModal.ts";
import { AddModal } from "../AddModal/AddModal.tsx";

interface Props {
  state: State;
}

export const Column = ({ state }: Props) => {
  const tasks: TaskType[] = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow,
  );
  const addTasks = useStore((store) => store.addTasks);

  const { open, showModal, closeModal, title, setTitle } = useAddModal();

  const handleClickAddTask = () => {
    addTasks({ title: title, state });
    closeModal();
  };

  return (
    <div className={styles.column}>
      <div className={styles.titleContainer}>
        <p>{stateTitle(state)}</p>
        <button className={styles.addButton} onClick={showModal}>
          Add
        </button>
      </div>
      {tasks.map((task, index) => {
        return <Card task={task} key={index.toString() + task.title} />;
      })}
      <AddModal
        open={open}
        title={title}
        setTitle={setTitle}
        handleClickAddTask={handleClickAddTask}
        closeModal={closeModal}
      />
    </div>
  );
};
